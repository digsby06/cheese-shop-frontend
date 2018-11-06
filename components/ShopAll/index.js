import './ShopAll.scss'
import Link from 'next/link'

const ShopAll = ({ text, link, type}) => (
    <div className="ShopAll-wrapper">
        <div className={`ShopAll btn-${type}`}>
            <Link prefetch href={link}><a className="back__btn">{text}</a></Link>
        </div>
    </div>
);

export default ShopAll;
