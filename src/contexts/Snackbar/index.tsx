import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Close as CloseIcon } from '@material-ui/icons';
import {
  SnackbarProvider as SNCKProvider,
  useSnackbar,
  SnackbarKey,
} from 'notistack';

import { FCWithChildren } from '@/types';

const SnackbarCloseButton: React.FC<{ id: SnackbarKey }> = ({ id }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(id)}>
      <CloseIcon style={{ fill: 'white' }} />
    </IconButton>
  );
};

export const SnackbarProvider: FCWithChildren<{}, true> = ({ children }) => {
  const classes = makeStyles(() => ({
    success: {
      backgroundColor: '#50CD89 !important',
      boxShadow: 'none !important',
    },
    warning: {
      backgroundColor: '#F1BC00 !important',
      boxShadow: 'none !important',
    },
    error: {
      backgroundColor: '#F1416C !important',
      boxShadow: 'none !important',
    },
  }))();

  return (
    <SNCKProvider
      maxSnack={3}
      hideIconVariant
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transitionDuration={{ enter: 300, exit: 400 }}
      autoHideDuration={3000}
      action={(key: SnackbarKey) => <SnackbarCloseButton id={key} />}
      classes={{ variantSuccess: classes.success }}
    >
      {children}
    </SNCKProvider>
  );
};
