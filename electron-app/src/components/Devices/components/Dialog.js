import React, { useContext, useState } from 'react';
import { ClientContext } from '../../../utils/ClientContext';
import {
  Checkbox,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core/';
import SpeakerGroupIcon from '@material-ui/icons/SpeakerGroup';

const SimpleDialog = (props) => {
  const { onClose, open } = props;

  const [state, setState] = useContext(ClientContext);
  const [selected, setSelected] = useState(null);

  const handleChange = (deviceName) => {
    const deviceIndex = state.devices.findIndex(
      (device) => device.name === deviceName
    );
    state.devices[deviceIndex].selected = !state.devices[deviceIndex].selected;
    setSelected({ ...state });
  };
  const handleOnClose = () => {
    if (selected !== null) {
      setState({ ...selected });
    }
    onClose();
  };

  return (
    <Dialog
      onClose={handleOnClose}
      maxWidth='xs'
      fullWidth
      aria-labelledby='simple-dialog-title'
      open={open}
    >
      <DialogTitle id='simple-dialog-title'>Select Devices</DialogTitle>
      <DialogContent>
        <List>
          {state.devices.map((device) => (
            <ListItem
              button
              onClick={() => handleChange(device.name)}
              key={device.name}
            >
              <ListItemIcon>
                <SpeakerGroupIcon />
              </ListItemIcon>
              <ListItemText id='switch-list-label-wifi' primary={device.name} />
              <ListItemSecondaryAction>
                <Checkbox
                  checked={device.selected}
                  name={device.name}
                  onClick={() => handleChange(device.name)}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <DialogActions>
          <Button onClick={handleOnClose} color='primary' autoFocus>
            SAVE
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
