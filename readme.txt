The HTML (React) template is bought from monstertemplate.com

Setup development env:
Download and install node.js v18.12.1 (please note that: should be check 'Automaticatlly install the nesscessary tools.'
Disable anti-virus 
open powershell with admin
cd reboot-main\reboot-react
npm install
Download and install VS code
install plug-in : Live server, ES7 React/Redux/GraphQL/React-Native snippets
open folder reboot-main\reboot-react
npm start
> If not work try install
npm install bootstrap@v5.2.2

Deploy to AWS S3:
cd reboot-main\reboot-react
npm run build
Goto AWS new S3 for example named testing5345 -> Block Public Access settings for this bucket -> uncheck everything
And CHECK 'I acknowledge that the current settings might result in this bucket and the objects within becoming public.'
properties -> Static website hosting -> Enabled
Permissions -> add Bucket policy -> 
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

upload reboot-main\reboot-react\build\* to S3 (testing5345)

Set SSL

Set Route 53