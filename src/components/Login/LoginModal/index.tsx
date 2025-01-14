import { Box, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { Close } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import LoginButton from '../LoginButton';
import style from './LoginModal.module.scss';

const LoginModal: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(true);

    const handleClose = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <Modal
                open={modalVisible}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={style.LoginModal}>
                    <Box className={style.Body}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Action Required
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </Box>

                    <Typography id="modal-modal-description">
                        You should be logged in to add favorites
                    </Typography>

                    <Box className={style.Button}>
                        <LoginButton />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default LoginModal;