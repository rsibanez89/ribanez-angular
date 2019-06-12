from __future__ import print_function

import json
import urllib2


class GistView:
    def __init__(self, gistId=None, gistAccount=None, gistContent=None, gistCss=None):
        self.gistId = gistId
        self.gistAccount = gistAccount
        self.gistContent = gistContent
        self.gistCss = gistCss

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)


def handle(event, context):
    if 'queryStringParameters' not in event:
        return handle_exception('queryStringParameters parameters are required. Example: ?gistId=d4bca1c9a6d1948be171cc42055db153&gistAccount=rsibanez89')

    if 'gistId' not in event['queryStringParameters']:
        return handle_exception('gistId parameter is required')

    if 'gistAccount' not in event['queryStringParameters']:
        return handle_exception('gistAccount parameter is required')

    gist = GistView()
    gist.gistId = event['queryStringParameters']['gistId']
    gist.gistAccount = event['queryStringParameters']['gistAccount']

    # parsing response
    url = 'https://gist.github.com/{0}/{1}.js'.format(gist.gistAccount, gist.gistId)
    try: 
        response = urllib2.urlopen(url).read().split('\n')
    except:
        return handle_exception('Valid gistId and gistAccount parameters are required')
    
    gist.gistCss = response[0][16:-2].decode('unicode_escape') # Removes document.write('...')
    gist.gistContent = response[1][16:-2].decode('unicode_escape') # Removes document.write('...')

    return {
        'statusCode': 200,
        'body': gist.toJSON(),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

def handle_exception(message):
    return {
        'statusCode': 404,
        'body': { 'message': message },
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

# Local test
if __name__ == "__main__":
    event = {
        'queryStringParameters': {
            'gistId': 'd4bca1c9a6d1948be171cc42055db153',
            'gistAccount': 'rsibanez89'
        }
    }
    response = handle(event, None)
    print(response)
