import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
	name,
	value,
	type,
	placeholder,
	onChange,
	disable
	}) => {
		return (
	    	<div className = "form-group">
	    		<input
	    			className = {classnames('form-control form-control-lg')}
	    			name = {name}
					value={value}
					type={type}
					placeholder={placeholder}
					onChange={onChange}
					disable={disable}
	    		/>	    		
	    	</div>
	  	);
};

TextFieldGroup.propTypes = {
	name:PropTypes.string.isRequired,
	value:PropTypes.string.isRequired,
	type:PropTypes.string.isRequired,
	placeholder:PropTypes.string.isRequired,
	onChange:PropTypes.func.isRequired,
	disable:PropTypes.string,
}

TextFieldGroup.defaultprops = {
	type:'text'
}

export default TextFieldGroup;