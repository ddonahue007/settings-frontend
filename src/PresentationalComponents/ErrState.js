import React from 'react';
import propTypes from 'prop-types';
import ErrorState from '@redhat-cloud-services/frontend-components/ErrorState';

export const ErrState = ({
  errorTitle,
  errorDescription,
  hrefUrl,
  hrefText,
}) => {
  return (
    <ErrorState
      errorTitle={errorTitle}
      errorDescription={
        <span>
          {errorDescription} <br /> <a href={hrefUrl}>{hrefText}</a>
        </span>
      }
    />
  );
};

ErrState.propTypes = {
  errorTitle: propTypes.string,
  errorDescription: propTypes.string,
  hrefUrl: propTypes.string,
  hrefText: propTypes.string,
};
