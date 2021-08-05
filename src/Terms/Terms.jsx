import {React} from 'react';
import {withRouter} from 'react-router-dom';
import './Terms.css'


function Terms() {
    return (
        <div className="container">
                <header id="terms-header">
                    <h1>Terms of Service</h1>
                </header>

                <div className="terms-content">

                    <p>
                    These terms govern your access to and use of Alertific.com, as well as all content and Alertific products and services available at or through these websites (collectively, “Services”). Our Services are offered subject to your acceptance, without modification, of all of the terms and conditions contained herein and all other operating rules, policies (including, without limitation, Alertific’s Privacy Policy), and procedures that may be published from time to time by Alertific (collectively, the “Agreement”). You agree that we may automatically upgrade our Services, and the Agreement will apply to any upgrades. Please read the Agreement carefully before accessing or using our Services. By accessing or using any part of our Services, you agree to become bound by the Agreement. If you do not agree to all the terms of the Agreement, then you may not access or use our Services.
                    </p>
                    <div className="content-item">
                        <h3>Your Account</h3>
                        <p>
                        Where use of our Services requires an account, you agree to provide us with complete and accurate information when you register for an account. You will be solely responsible and liable for any activity that occurs under your username. You are responsible for keeping your account information up-to-date and for keeping your password secure.
                        You are responsible for maintaining the security of your account and any Service-related website, store, or other content, and you are fully responsible for all activities that occur under your account and any other actions taken in connection with our Services. You must not share or misuse your access credentials. You must immediately notify us of any unauthorized use of your account or of any other breach of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
                        When you create an Alertific.com account, we consider that to be an inquiry about our products and services, which means that we may contact you to share more details about what we have to offer. If you aren't interested in learning more, you can opt out of all marketing communications.
                        </p>
                    </div>
                    <div className="content-item">
                        <h3>Responsibility of Visitors and Users</h3>
                        <p>
                        We have not reviewed, and cannot review, all of the content (such as, but not limited to, text, photo, video, audio, code, computer software, items for sale, or other materials) posted to our Services by users or anyone else (“Content”) and are not responsible for any use or effects of such Content. So, for example:
                        We do not endorse any Content or represent that Content is accurate, useful, or non-harmful. Content could be offensive, indecent, or objectionable; include technical inaccuracies, typographical mistakes, or other errors; or violate or infringe the privacy, publicity rights, intellectual property rights, or other proprietary rights of third parties.
                        We disclaim any responsibility for any harm resulting from anyone’s use, purchase, or downloading of Content. If you access or use any Content, you are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content.
                        We are not a party to, and will have no responsibility or liability for, any communications, transactions, interactions, or disputes between you and the provider of any Content.
                        Please note that additional third party terms and conditions may apply to the downloading, copying, purchase, or use of Content.
                        </p>
                    </div>
                    <div className="content-item">
                        <h3>Fees, Payment, and Renewal</h3>
                        <div>
                            <p>
                            <h4>Fees for Paid Services.</h4> <p>Some of our Services are offered for a fee. By using a Paid Service, you agree to pay the specified fees. Depending on the Paid Service, there may be a one-time fee, recurring fees, or revenue-based fees. For recurring fees, we’ll bill or charge you for in regular automatically-renewing intervals (such as monthly, annually, or biannually), on a pre-pay basis until you cancel, which you can do at any time by contacting us.</p>
                            <h4>Payment. </h4> <p>If your payment fails or if Paid Services are otherwise not paid for or paid for on time, we may immediately cancel or revoke your access to the Paid Services. If you contact your bank or credit card company to decline or reverse the charge of fees for Paid Services, we may revoke your access to our Services in general.</p>
                            <h4>Automatic Renewal. </h4> <p> To ensure uninterrupted service, recurring Paid Services are automatically renewed. This means that unless you cancel a Paid Service before the end of the applicable subscription period, it will automatically renew, and you authorize us to invoice you or use any payment mechanism we have on record for you to collect the then-applicable subscription fee (as well as any Taxes). By default, your Paid Services will be renewed for the same interval of time as your original subscription period. For example, if you purchase an Alertific.com annual plan, you will be charged each year for the following 12-month period. We may charge your account up to 7 days before the end of the subscription period. The date for the automatic renewal is determined automatically based on the date of the original purchase and cannot be changed.</p>
                            </p>
                            <h4>Cancelling Automatic Renewal. </h4> <p>Please contact us at any time if you would like to disable automatic renewal.</p>
                            <h4>Fee Changes. </h4> <p>We may change our fees at any time, or start charging fees for Services that were previously free. When applicable, we may give you advance notice of the fee changes. If you don’t agree with the fee changes, you must cancel your Paid Service.</p>
                            <h4>Refunds.</h4> <p>While you may cancel a Paid Service at any time, refunds are issued in our sole discretion, unless otherwise required by applicable law.</p>
                        </div>
                    </div>
                    <div className="content-item">
                        <h3>General Representation and Warranty</h3>
                        <p>
                        You represent and warrant that your use of our Services:
                        </p>
                        <ul>
                            <li>Will be in strict accordance with these Terms;</li>
                            <li>Will comply with all applicable laws and regulations (including, without limitation, all applicable laws regarding online conduct and acceptable content, privacy, data protection, and the transmission of technical data exported from the United Kingdom or the country in which you reside);</li>
                            <li>Will not use the Services for any unlawful purposes, to publish illegal content, or in furtherance of illegal activities;</li>
                            <li>Will not infringe or misappropriate the intellectual property rights of any third party;</li>
                            <li>Will not overburden Alertific’s systems, as determined by us in our sole discretion;</li>
                            <li>Will not disclose sensitive personal information of others;</li>
                            <li>Will not interfere with, disrupt, or attack any service or network; and</li>
                            <li>Will not be used to create, distribute, or enable material that is - or that facilitates or operates in conjunction with - malware, spyware, adware, or other malicious programs or code.</li>
                        </ul>
                    </div>
                    <div className="content-item">
                        <h3>Changes</h3>
                        <p>
                        We are constantly updating our Services and that means sometimes we have to change the legal terms under which our Services are offered. These Terms may only be modified by a written amendment signed by an authorized executive of Alertific, or by the posting by Alertific of a revised version. If we make changes that are material, we will let you know by sending you an email or other communication before the changes take effect. The notice will designate a reasonable period of time after which the new terms will take effect. If you disagree with our changes, then you should stop using our Services within the designated notice period, or once the changes become effective. Your continued use of our Services will be subject to the new terms. However, any dispute that arose before the changes shall be governed by the Terms (including the binding individual arbitration clause) that were in place when the dispute arose.
                        </p>
                    </div>
                    <div className="content-item">
                        <h3>Termination</h3>
                        <p>
                        We may terminate your access to all or any part of our Services at any time, with or without cause, with or without notice, effective immediately. We have the right (though not the obligation) to, in our sole discretion, terminate or deny access to and use of any of our Services to any individual or entity for any reason. We will have no obligation to provide a refund of any amounts previously paid.
                        If you wish to terminate the Agreement or your Alertific account, you may simply discontinue using our Services, or, if you are using a paid service, you may cancel at any time, subject to the Fees, Payment, and Renewal section in these Terms.
                        </p>
                        <p>All provisions of the Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
                    </div>
                    <div className="content-item">
                        <h3>Disclaimer of Warranties</h3>
                        <p>
                        Our Services are provided “as is.” Alertific and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither Alertific, nor its suppliers and licensors, makes any warranty that our Services will be error free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, our Services at your own discretion and risk.
                        </p>
                    </div>
                    <div className="content-item">
                        <h3>Limitation of Liability</h3>
                        <p>
                        In no event will Alertific, or its suppliers or licensors, be liable with respect to any subject matter of the Agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or loss or corruption of data; or (iv) for any amounts that exceed the fees paid by you to Alertific under the Agreement during the twelve (12) month period prior to the cause of action, whichever is greater. Alertific shall have no liability for any failure or delay due to matters beyond their reasonable control. The foregoing shall not apply to the extent prohibited by applicable law.
                        </p>
                    </div>
                    <div className="content-item">
                        <h3>Indemnification</h3>
                        <p>
                        You agree to indemnify and hold harmless Alertific, its contractors, and its licensors, and their respective directors, officers, employees, and agents from and against any and all losses, liabilities, demands, damages, costs, claims, and expenses, including attorneys’ fees, arising out of or related to your use of our Services, including but not limited to your violation of the Agreement.
                        </p>
                    </div>
                    <div className="content-item">
                        <h3>Miscellaneous</h3>
                        <p>
                        Where use of our Services requires an account, you agree to provide us with complete and accurate information when you register for an account. You will be solely responsible and liable for any activity that occurs under your username. You are responsible for keeping your account information up-to-date and for keeping your password secure.
                        You are responsible for maintaining the security of your account and any Service-related website, store, or other content, and you are fully responsible for all activities that occur under your account and any other actions taken in connection with our Services. You must not share or misuse your access credentials. You must immediately notify us of any unauthorized use of your account or of any other breach of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
                        When you create an Alertific.com account, we consider that to be an inquiry about our products and services, which means that we may contact you to share more details about what we have to offer. If you aren't interested in learning more, you can opt out of all marketing communications.
                        </p>
                    </div>
                    
                    
                </div>
            </div>
    )
    }

export default withRouter(Terms)