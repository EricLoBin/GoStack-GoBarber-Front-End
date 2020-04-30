import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container } from '../styles';

const Toast: React.FC = () => {
    return (
        <Container>
            <FiAlertCircle size={20}/>

            <div>
                <strong>
                    {message.title}
                </strong>
                {message.description && <p>
                    {message.description}
                </p>
                }

                <button onClick={() => removeToast(message.id)} type='button'>
                    <FiXCircle size={18} />
                </button>
            </div>
        </Container>
    );
}

export default Toast;
