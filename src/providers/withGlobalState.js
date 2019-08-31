import React                    from 'react';
import { connect            }   from 'react-redux';
import { bindActionCreators }   from 'redux';
import { toggleLoading      }   from '../store/actions/global.actions';

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleLoading,
}, dispatch);

const mapStateToProps = ({ global:{loading} }) => ({
    loading,
});

/**
 * This is a HOC (High order component) that allows to connect any component with 
 * redux states.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
export default WrappedComponent => (connect(mapStateToProps, mapDispatchToProps)(
        props => (
        <WrappedComponent 
            startLoading    = { () => props.toggleLoading(true)     }
            stopLoading     = { () => props.toggleLoading(false)    }
            {...props}
        />)
    )
);