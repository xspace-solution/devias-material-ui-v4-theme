import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'src/utils/axios';
import getInitials from 'src/utils/getInitials';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';

const technologyMap = {
  'html-css': '/static/images/technologies/html.svg',
  'react-js': '/static/images/technologies/react-js.svg',
  'vue-js': '/static/images/technologies/vue-js.svg',
  angular: '/static/images/technologies/angular.svg',
  figma: '/static/images/technologies/figma.svg',
  sketch: '/static/images/technologies/sketch.svg'
};

const useStyles = makeStyles((theme) => ({
  root: {},
  technology: {
    height: 30,
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  }
}));

const LatestProjects = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = useState([]);

  const getProjects = useCallback(async () => {
    try {
      const response = await axios.get('/api/reports/latest-projects');

      if (isMountedRef.current) {
        setProjects(response.data.projects);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Latest Projects"
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={900}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Title
                </TableCell>
                <TableCell>
                  Author
                </TableCell>
                <TableCell>
                  Budget
                </TableCell>
                <TableCell>
                  Technology
                </TableCell>
                <TableCell
                  align="right"
                  sortDirection="desc"
                >
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Created
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => (
                <TableRow
                  hover
                  key={project.id}
                >
                  <TableCell>
                    {project.title}
                  </TableCell>
                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                    >
                      <Avatar
                        alt="Author"
                        src={project.author.avatar}
                      >
                        {getInitials(project.author.name)}
                      </Avatar>
                      <Box ml={1}>
                        {project.author.name}
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {numeral(project.budget).format(`${project.currency}0,0.00`)}
                  </TableCell>
                  <TableCell>
                    {project.technologies.map((technology) => (
                      <img
                        alt="Tech"
                        key={technology}
                        className={classes.technology}
                        src={technologyMap[technology]}
                      />
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    {moment(project.createdAt).format('DD MMM, YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        p={2}
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          component={RouterLink}
          size="small"
          to="/app/projects"
          endIcon={<NavigateNextIcon />}
        >
          See all
        </Button>
      </Box>
    </Card>
  );
};

LatestProjects.propTypes = {
  className: PropTypes.string
};

export default LatestProjects;
