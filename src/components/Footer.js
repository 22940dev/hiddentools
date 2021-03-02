import React, { Component } from 'react';
import '../style/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
	            hidden tools by - <a aria-label="Bereket's Twitter" href="https://twitter.com/heybereket" target="_blank" rel="noreferrer">@heybereket</a> 🤞🏻
                <br/>
                follow us on <a aria-label="Hidden Tools' Twitter" href="https://twitter.com/hiddentools_" target="_blank" rel="noreferrer">twitter</a>, open-source on<a aria-label="Hidden Tools' Github" href="https://github.com/heybereket/hiddentools.dev" target="_blank" rel="noreferrer"> github</a>.
            </div>
        );
    }
}

export default Footer;