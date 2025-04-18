import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Box,
} from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';

// Mock data for top users
const topUsers = [
  {
    id: 1,
    name: 'John Doe',
    username: '@johndoe',
    followers: 12500,
    engagement: 4.8,
  },
  {
    id: 2,
    name: 'Jane Smith',
    username: '@janesmith',
    followers: 8900,
    engagement: 5.2,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    username: '@mikejohnson',
    followers: 15600,
    engagement: 4.5,
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    username: '@sarahwilson',
    followers: 11200,
    engagement: 4.9,
  },
  {
    id: 5,
    name: 'David Brown',
    username: '@davidbrown',
    followers: 9800,
    engagement: 4.7,
  },
];

const TopUsers: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Top Users
        </Typography>
        <List>
          {topUsers.map((user, index) => (
            <React.Fragment key={user.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={user.username}
                />
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" color="text.secondary">
                    {user.followers.toLocaleString()} followers
                  </Typography>
                  <Typography variant="body2" color="primary">
                    {user.engagement}% engagement
                  </Typography>
                </Box>
              </ListItem>
              {index < topUsers.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TopUsers; 