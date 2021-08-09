import { makeStyles } from '@material-ui/core/styles';

import colorSet from '../../colors';

const styles = makeStyles((theme) => ({
  button: {
    height: 25,
    width: 25,
    color: colorSet.iconColor,
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default styles;
