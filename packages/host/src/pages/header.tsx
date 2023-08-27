import React from 'react';
import Link from "next/link";
import './header.css'

const Header = () => {
    return (
        <div id="utility-bar-header" className="utility-bar" style={{ display: 'flex', fontSize: '20px' }}>
            <div style={{ display: 'flex', padding: '20px', width: '80%' }}>
                <div id="utility-logo">
                    <a href="/en/help-home/" data-gtm-vis-recent-on-screen-12578838_71="2816" data-gtm-vis-first-on-screen-12578838_71="2816" data-gtm-vis-total-visible-time-12578838_71="100" data-gtm-vis-has-fired-12578838_71="1">
                        <img alt="Go back to EA Help Homepage" src="//eaassets-a.akamaihd.net/eahelp/assets/128.01-MINOR-RELEASE/public/build/images/ihi/EA Help_logo.png" className="ea-logo" style={{ height: '40px' }} />
                    </a>
                </div>
                <ul className="nav nav-pills ihi-navigation" style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <li className="dropdown ihi-mycases" id="account-selector " style={{ paddingRight: '20px' }} >
                        <Link href="/remote">My Cases</Link>
                    </li>
                    <li className="dropdown account-selector ihi-custom" id="account-selector">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#" data-gtm-vis-recent-on-screen-12578838_71="2825" data-gtm-vis-first-on-screen-12578838_71="2825" data-gtm-vis-total-visible-time-12578838_71="100" data-gtm-vis-has-fired-12578838_71="1">
                            <span className="label-nav">Manage My Account</span>
                        </a>
                        <link rel="stylesheet" href="//eaassets-a.akamaihd.net/eahelp/assets/128.01-MINOR-RELEASE/public/build/accounts-list.4b74cd3a.css" />
                        <ul className="dropdown-menu" id="icon-menu">
                            {/* List items go here */}
                        </ul>
                    </li>
                    <li style={{ paddingRight: '20px' }}>
                        <Link href="/">Got back home</Link>
                    </li>
                </ul>
            </div>

            <div id="gus" className="ihi-gus" style={{ display: 'flex', padding: '20px', width: '20%' }}>
                <div className="ihi-logged-out label-nav">
                    <a href="/en/eadp_check/login/" className="login">Log In</a>/<a href="/en/eadp_check/signup/" className="signup">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
