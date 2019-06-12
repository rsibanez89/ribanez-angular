# On local environment run > Powershell.exe -File ./gist_parser/deploy.ps1
Write-Host 'Deploying...'

sam package --template-file ./gist_parser/gist_parser.yaml --output-template ./gist_parser/gist_parser_output.yaml --s3-bucket rsibanez89

sam deploy --template-file ./gist_parser/gist_parser_output.yaml --stack-name gist-parser --capabilities CAPABILITY_NAMED_IAM

Remove-Item ./gist_parser/gist_parser_output.yaml