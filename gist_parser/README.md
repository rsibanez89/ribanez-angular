### 1 - Build and Deploy will execute 2 and 3
```
> Powershell.exe -File ./gist_parser/deploy.ps1
```

### 2 - Upload the code to s3
```
> sam package --template-file ./gist_parser/gist_parser.yaml --output-template ./gist_parser/gist_parser_output.yaml --s3-bucket rsibanez89
```

### 3 - Deploy
```
> sam deploy --template-file ./gist_parser/gist_parser_output.yaml --stack-name gist-parser --capabilities CAPABILITY_NAMED_IAM
```