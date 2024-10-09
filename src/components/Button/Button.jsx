import propTypes, { string } from ‘prop-types';
export default function Button({onClick, className, label}) {
    return (
    <button className={className} onClick={onClick}>{label}</button>
    )
}
Button.propTypes = {
    onClick: propTypes.func.isRequired,
    className: string,
    label: string
};