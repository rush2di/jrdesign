import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

const _TIMEOUT = 300;
const _GET_TRANSITION_STYLES = {
  entering: {
    opacity: 0,
    transition: `opacity ${_TIMEOUT}ms ease-in-out`,
  },
  entered: {
    transition: `opacity ${_TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${_TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
};

const Transition = ({ children, location }) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location}
        timeout={{
          enter: _TIMEOUT,
          exit: _TIMEOUT,
        }}
      >
        {(status) => (
          <div
            style={{
              ..._GET_TRANSITION_STYLES[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default Transition;
