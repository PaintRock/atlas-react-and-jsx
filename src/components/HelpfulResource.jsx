import OpenLink from './OpenLink';
import CopyLink from './CopyLink';

export default function HelpfulResource({ link, label }) {  // Changed 'lable' to 'label'
    return (
        <div className="helpful-resource">
            {label}
            <OpenLink link={link} />
            <CopyLink link={link} />
        </div>
    );
};