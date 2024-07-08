import React, { ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import '../assets/scss/utils/_fade.scss';

interface FadeTransitionProps {
    children: ReactNode;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({ children }) => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade"
            >
                <div className="fade-container">
                    {children}
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default FadeTransition;
