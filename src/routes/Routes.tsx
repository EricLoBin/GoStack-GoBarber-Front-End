import React from 'react';
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false }) => {
    const { user } = useAuth();
};

export default Route;
