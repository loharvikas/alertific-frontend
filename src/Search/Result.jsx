import React from 'react';
import { Link } from 'react-router-dom'

const Result = (props) => {
    const { app_list, platform, country } = props
    console.log("RESULT")
    console.log(app_list)
    if (app_list.length > 0) {
        return (
            <div className="result-container">
                {
                    app_list.map(app => (

                        <App
                            appName={app.title}
                            developerName={app.developer}
                            appImage={app.icon}
                            key={app.app_id}
                            app_id={app.app_id}
                            developerId={app.developer_id}
                            platform={platform}
                            country={country}
                        />
                    ))
                }
            </div>
        )
    }
    return (
        <span></span>
    )
}

const App = (props) => {
    const { appName, developerName, appImage, app_id, developerId, platform, country } = props;
    return (
        <div className="result">
            <div>
                <div>
                    <div className="img">
                        <img src={appImage} alt="user profile"></img>
                    </div>
                    <div className="content">
                        <h3 className="title">{appName}</h3>
                        <p className="info">{developerName}</p>
                    </div>
                </div>
                <div>
                    <Link to={{
                        pathname: "/subscribe/",
                        state: {
                            data: {
                                app_name: appName,
                                app_id: app_id,
                                developer_id: developerId,
                                app_icon: appImage,
                            },
                            country: country,
                            services: platform,

                        },
                    }}>
                        <button type="submit" className='select-btn'>Select</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Result