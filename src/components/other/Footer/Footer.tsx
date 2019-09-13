import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <section className="footer">
            <a href="https://newsapi.org/">Powered by News API</a>
        </section>
    );
};

export default Footer;
