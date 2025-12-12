# Change icon from star to checkmark in "WHAT WE DO" section
> reboot-main > reboot-react > src > assets > sass > components > _what-we-do.scss
```scss
&:before {
  content: '\ec7c';  // icofont-ui-rating (star icon)
  font-family: 'IcoFont';
  position: absolute;
  left: 0;
  color: #FE5A10;
}
```
## changed to :
```scss
&:before {
  content: '\f021';  // icofont-verification-check (checkmark icon)
  font-family: 'IcoFont';
  position: absolute;
  left: 0;
  color: #FE5A10;
}
```

# Stop showing "CRM"
> reboot-main > reboot-react > public > locales > en > translation.json > whatWeDo > itemList1
```json
    "itemList1": {
      "1": "TV wall",
      "2": "CRM",
      "3": "Online shop",
      "4": "IOT"
    },
```
## changed to :
```json
    "itemList1": {
      "1": "TV wall",
      "2": "",
      "3": "Online shop",
      "4": "IOT"
    },
```
> reboot-main > reboot-react > public > locales > tc > translation.json > whatWeDo > itemList1
```json
      "itemList1": {
        "1": "專業電視牆方案",
        "2": "客戶關係管理系統",
        "3": "網上商店",
        "4": "物聯網"
      },
```
## changed to :
```json
      "itemList1": {
        "1": "專業電視牆方案",
        "2": "",
        "3": "網上商店",
        "4": "物聯網"
      },
```
The HTML (React) template is bought from monstertemplate.com

# Setup development env:
## node.js
Download and install node.js v18.12.1 (please note that: should be check 'Automaticatlly install the nesscessary tools.'

Disable anti-virus 

open powershell with admin
```dos
cd reboot-main\reboot-react
npm install
```
## VS code
Download and install VS code

install plug-in : Live server, ES7 React/Redux/GraphQL/React-Native snippets

open folder reboot-main\reboot-react
```bash
npm start

# If not work try install bootstrap
npm install bootstrap@v5.2.2
```

# Deploy to AWS S3:
Build the source code:
```dos
cd reboot-main\reboot-react
npm run build
```
Goto AWS new S3 for example named testing5345 -> Block Public Access settings for this bucket -> uncheck everything

And CHECK 'I acknowledge that the current settings might result in this bucket and the objects within becoming public.'

properties -> Static website hosting -> Enabled 

Permissions -> add Bucket policy -> 
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:GetObjectVersion"
            ],
            "Resource": "arn:aws:s3:::testing5345/*"
        }
    ]
}
```
upload reboot-main\reboot-react\build\* to S3 (testing5345)

## Set Route 53
### <span style="color:orange;">**Domain name**</span>


AWS Route53 : 
Create Hosted zone :

Domain name: tsvd.com.hk

Then copy the NS list like this :
```
NS-25.AWSDNS-03.COM.
NS-763.AWSDNS-31.NET.
NS-1433.AWSDNS-51.ORG.
NS-1666.AWSDNS-16.CO.UK.
```

goto your domain name server for example : https://www.hkdnr.hk/

set your domain name server :
> Please note that: remove last . of the NS name
```
NS-25.AWSDNS-03.COM
NS-763.AWSDNS-31.NET
NS-1433.AWSDNS-51.ORG
NS-1666.AWSDNS-16.CO.UK
```

## AWS Cloudfront and SSL
### <span style="color:orange;">**AWS Certificate Manager**</span>
Request a certificate (public)

Domain name : tsvd.com.hk

DNS validation

Click the cert just created : tsvd.com.hk

Create record in Route 53

### <span style="color:orange;">**AWS Cloudfront**</span>
Before set Cloudfront go back S3 -> tsvd.com.hk -> properties -> static website hosting 

copy the endpoint: http://tsvd2022.s3-website-us-east-1.amazonaws.com

Goto Cloudfront

Create Distribution

web

Origin Domain Name : tsvd2022.s3-website-us-east-1.amazonaws.com **do not select s3**

Viewer Protocol Policy : Redirect HTTP to HTTPS

Distribution Settings -> Alternate domain names
add : tsvd.com.hk

SSL certificate : Custom SSL Cert. -> Select the SSL

Click Create -> Done

Copy the Cloudfront Distribution domain name : d26yuriuyzk7mb.cloudfront.net
### <span style="color:orange;">**New NS record for Cloudfront**</span>

Goto Route 53

Create New Record :

Alias : Yes

Alias Target : d26yuriuyzk7mb.cloudfront.net (Cloudfront Distribution domain name)

