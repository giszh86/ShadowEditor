import './css/LinkButton.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

/**
 * 链接按钮
 * @author tengge / https://github.com/tengge1
 */
class LinkButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this, props.onClick);
    }

    render() {
        const { className, style, children, disabled } = this.props;

        return <a className={classNames('LinkButton', disabled && 'disabled', className)}
            style={style}
            href={'javascript:;'}
            disabled={disabled}
            onClick={this.handleClick}
               >
            {children}
        </a>;
    }

    handleClick(onClick, event) {
        !this.props.disabled && onClick && onClick(this.props.name, event);
    }
}

LinkButton.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

LinkButton.defaultProps = {
    className: null,
    style: null,
    name: null,
    children: null,
    disabled: false,
    onClick: null
};

export default LinkButton;