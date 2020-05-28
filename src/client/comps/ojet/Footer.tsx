import React from 'react'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({}) => {
        return (<>
            <footer >
                <div style={{paddingTop: "10px"}}>
                    <span>About Oracle</span>
                    <span>Contact Us</span>
                    <span>Legal Notices</span>
                    <span>Terms Of Use</span>
                    <span>Your Privacy Rights</span>
                </div>
                <div>
                Copyright © 2014, 2020 Oracle and/or its affiliates All rights reserved. 
                </div>
            </footer>
        </>);
}