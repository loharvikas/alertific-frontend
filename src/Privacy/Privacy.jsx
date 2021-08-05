import {React} from 'react';
import {withRouter} from 'react-router-dom';
import './Privacy.css'


function Privacy() {
    return (
        <div className="container">
            <div className="company-info">
                <header id="privacy-header">
                    <h1>Customer Privacy Policy</h1>
                </header>

                <div className="privacy-content">
                    <p>
                    Your privacy is important to us. It is Alertific's policy to respect your privacy regarding any information we may collect from you across our services, including but not limited to Alertific.com, Slack integration, Microsoft Teams application and any other services we own and operate.
                    </p>
                    <p>
                    We only ask for personal information when we need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                    </p>
                    <p>
                    We only retain collected information for as long as necessary to provide you with your requested service. We’ll protect the data we store, within commercially acceptable means, to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
                    </p>
                    <p>
                    We don’t share any personally identifying information publicly or with third-parties, except when required to by law. We don't use data collected about your apps or your competitor's apps for any purpose other than delivering new app reviews directly to your email or Slack or Microsoft Teams channel.
                    </p>
                    <p>
                    Our services may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                    </p>
                    <p>
                    You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                    Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. 
                    </p>
                    <p>
                    If you have any questions about how we handle user data and personal information, feel free to contact us on alerts@alertific.com
                    </p>
                    <p>
                    This policy is effective as of August 5th, 2021.
                    </p>
                </div>
            </div>
            </div>
    )
    }

export default withRouter(Privacy)