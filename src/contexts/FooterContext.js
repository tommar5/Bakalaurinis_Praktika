import React from 'react'

export const selects = {
    language: {
      open: false,
    },
    country: {
        open: false,
    },
    currency: {
        open: false,
    },
  };

export const FooterContext = React.createContext(
    selects
);