import React from 'react';
import { ExclamationCircleIcon } from '@patternfly/react-icons/';
import propTypes from 'prop-types';
import {
  Title,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  Button,
} from '@patternfly/react-core';
import './error-state.scss';

export const ErrorState = ({
  errorTitle,
  errorDescription,
  hrefUrl,
  hrefText,
}) => {
  return (
    <EmptyState variant={EmptyStateVariant.large} className="ins-c-error-state">
      <EmptyStateIcon icon={ExclamationCircleIcon} />
      <Title headingLevel="h4" size="lg">
        {errorTitle}
      </Title>
      <EmptyStateBody>
        {errorDescription}
        <br />
        <a href={hrefUrl} target="_blank" rel="noopener noreferrer">
          {hrefText}
        </a>
      </EmptyStateBody>
      {document.referrer ? (
        <Button variant="primary" onClick={() => history.back()}>
          Return to last page
        </Button>
      ) : (
        <Button
          variant="primary"
          component="a"
          href="."
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to home page
        </Button>
      )}
    </EmptyState>
  );
};

ErrorState.propTypes = {
  errorTitle: propTypes.string,
  errorDescription: propTypes.string,
  hrefUrl: propTypes.string,
  hrefText: propTypes.string,
};

ErrorState.defaultProps = {
  errorTitle: 'Something went wrong',
  errorDescription: 'There was a problem processing the request.',
};
