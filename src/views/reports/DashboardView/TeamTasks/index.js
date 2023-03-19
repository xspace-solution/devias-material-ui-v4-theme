import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';
import TaskItem from './TaskItem';

const useStyles = makeStyles(() => ({
  root: {}
}));

const TeamTasks = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [tasks, setTasks] = useState([]);

  const getTasks = useCallback(async () => {
    try {
      const response = await axios.get('/api/reports/latest-tasks');
  
      if (isMountedRef.current) {
        setTasks(response.data.tasks);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Team Tasks"
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={400}>
          <List>
            {tasks.map((task, i) => (
              <TaskItem
                divider={i < tasks.length - 1}
                key={task.id}
                task={task}
              />
            ))}
          </List>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

TeamTasks.propTypes = {
  className: PropTypes.string
};

export default TeamTasks;
