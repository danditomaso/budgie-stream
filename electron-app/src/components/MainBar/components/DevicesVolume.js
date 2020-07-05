import { List, ListItem, ListItemText, Slider } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: '#2e3440',
    '& .MuiListItem-root': {
      paddingBottom: '0px',
      paddingTop: '0px',
    },
  },
  slider: {
    color: '#d8dee9',
  },
  typo: {
    color: '#d8dee9',
  },
}));

const DevicesVolume = (props) => {
  const classes = useStyles();
  const devices = props.devices;
  const value = props.getValue;

  const getValue = (name) => {
    console.log(name);
    return value.name;
  };

  return (
    <List className={classes.root}>
      {devices.map((device) => (
        <ListItem key={device.name} alignItems='flex-start'>
          <ListItemText
            className={classes.typo}
            primary={device.name}
            secondary={
              <React.Fragment>
                <Slider
                  value={value[device.name] ? value[device.name] : 1}
                  onChange={(event, value) =>
                    props.handleChange(device.name, value)
                  }
                  className={classes.slider}
                />
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default DevicesVolume;
