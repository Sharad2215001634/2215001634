import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Favorite as FavoriteIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
} from '@mui/icons-material';

// Mock data for engagement metrics
const metrics = [
  {
    title: 'Total Engagement',
    value: '24.5K',
    change: '+12.3%',
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Likes',
    value: '15.2K',
    change: '+8.7%',
    icon: <FavoriteIcon sx={{ fontSize: 40, color: 'error.main' }} />,
  },
  {
    title: 'Comments',
    value: '3.8K',
    change: '+15.2%',
    icon: <CommentIcon sx={{ fontSize: 40, color: 'info.main' }} />,
  },
  {
    title: 'Shares',
    value: '5.5K',
    change: '+9.4%',
    icon: <ShareIcon sx={{ fontSize: 40, color: 'success.main' }} />,
  },
];

const EngagementMetrics: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {metrics.map((metric, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                {metric.icon}
                <Typography
                  variant="body2"
                  color={metric.change.startsWith('+') ? 'success.main' : 'error.main'}
                >
                  {metric.change}
                </Typography>
              </Box>
              <Typography variant="h4" component="div" gutterBottom>
                {metric.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {metric.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EngagementMetrics; 