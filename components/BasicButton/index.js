import './BasicButton.scss'

const BasicButton = ({ text, handleClick, type}) => (
    <div className={`BasicButton btn-${type}`}>
        <a tabIndex="0" role="button" onClick={handleClick}>{text}</a>
    </div>
);

export default BasicButton;
