import React, { ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import '../assets/scss/utils/_fade.scss';

interface FadeTransitionProps {
    children: ReactNode;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({ children }) => {
    const location = useLocation();
    const nodeRef = React.useRef(null);

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
                nodeRef={nodeRef}
            >
                <div ref={nodeRef}>
                    {children}
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default FadeTransition;
