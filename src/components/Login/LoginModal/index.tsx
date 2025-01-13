import {Box, Button, Modal, Typography} from '@mui/material';
import {LOGIN_URL} from '../../../API/authConfig';
import {useState} from 'react';
import {Close} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import LoginButton from '../LoginButton';

const LoginModal: React.FC = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

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
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Action Required
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </Box>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You should be logged in to add favorites
                    </Typography>

                    <Box sx={{ textAlign: 'right', mt: 3 }}>
                        <LoginButton />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default LoginModal;