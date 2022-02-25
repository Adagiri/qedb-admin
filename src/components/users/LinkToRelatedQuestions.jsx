import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useTranslate, FieldProps } from 'react-admin';
import { stringify } from 'query-string';
import ObjectID from 'bson-objectid';


import questions from '../questions';

const useStyles = makeStyles({
  icon: { paddingRight: '0.5em' },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
  },
});

const LinkToRelatedQuestions = (props) => {
  const { record } = props;

  console.log(record)
  const translate = useTranslate();
  const classes = useStyles();
  return record ? (
    <Button
      size='small'
      color='primary'
      component={Link}
      to={{
        pathname: '/questions',
        search: stringify({
          filter: JSON.stringify({ 'author.id':  record._id }),
        }),
      }}
      className={classes.link}
    >
      <questions.icon className={classes.icon} />
      {/* {translate('resources.categories.fields.products')} */}
    </Button>
  ) : null;
};

export default LinkToRelatedQuestions;
