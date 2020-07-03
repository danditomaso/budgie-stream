import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

export default function CustomizedDialogs(props) {
  const { close } = props;
  const [supporters, setSupporters] = useState(null);
  const loadSupporters = async () => {
    const response = await fetch(
      'https://filahf.github.io/budgie-stream-supporters/supporters.json'
    );
    const data = await response.json();
    setSupporters(data.supporters);
    console.log(data.supporters);
  };

  useEffect(() => {
    loadSupporters();
  }, []);

  return (
    <div>
      <Dialog
        onClose={close}
        aria-labelledby='customized-dialog-title'
        open={props.open}
      >
        <DialogTitle id='customized-dialog-title' onClose={close}>
          Supporters of Budgie Stream
        </DialogTitle>
        <DialogContent>
          {supporters &&
            supporters.map((supporter, id) => (
              <Typography>{supporter.name}</Typography>
            ))}
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <MuiDialogActions>
          <Button variant='contained' color='secondary'>
            Support
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}
