from __future__ import print_function

import sys
import json
import urllib2
import logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def handle(event, context):
    logger.info(event)
    logger.info('Validating query parameters')

    if event is None or 'queryStringParameters' not in event or event['queryStringParameters'] is None:
        return handle_exception('queryStringParameters parameters are required. Example: ?gistId=d4bca1c9a6d1948be171cc42055db153&gistAccount=rsibanez89')

    if 'gistId' not in event['queryStringParameters']:
        return handle_exception('gistId parameter is required')

    if 'gistAccount' not in event['queryStringParameters']:
        return handle_exception('gistAccount parameter is required')

    gistId = event['queryStringParameters']['gistId']
    gistAccount = event['queryStringParameters']['gistAccount']

    logger.info('Starting request')
    url = 'https://gist.github.com/{0}/{1}.js'.format(gistAccount, gistId)
    try: 
        response = urllib2.urlopen(url).read().split('\n')
    except:
        return handle_exception('Valid gistId and gistAccount parameters are required')
    
    gistCss = response[0][16:-2] # Removes document.write('...')
    gistContent = response[1][16:-2] # Removes document.write('...')

    logger.info('Ending request successfully')
    return {
        'statusCode': 200,
        'body': json.dumps({
            'gistId': gistId,
            'gistAccount': gistAccount,
            'gistCss': gistCss,
            'gistContent': gistContent.decode('string_escape').replace('\\', '')
        }),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

def handle_exception(message):
    return {
        'statusCode': 404,
        'body': json.dumps({ 'message': message }),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

# Local test
if __name__ == "__main__":
    handler = logging.StreamHandler(sys.stdout)
    handler.setLevel(logging.DEBUG)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    event = {
        'queryStringParameters': {
            'gistId': 'd4bca1c9a6d1948be171cc42055db153',
            'gistAccount': 'rsibanez89'
        }
    }
    response = handle(event, None)
    print(response)
