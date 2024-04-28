import React from "react";
import {
  Avatar,
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Skeleton,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";

function ProfilePage() {
  const [profileData, setProfileData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Simulate fetching data (normally, replace this with your actual data fetching logic)
  React.useEffect(() => {
    setTimeout(() => {
      setProfileData({
        username: "CryptoFan123",
        avatarUrl: "https://via.placeholder.com/150",
        followers: 234,
        following: 165,
        upvotes: 1200,
        downvotes: 300,
      });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Skeleton variant="rectangular" width={210} height={118} />;
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", padding: 16 }}
    >
      <Paper
        elevation={3}
        style={{ padding: 20, maxWidth: 500, width: "100%" }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            src={profileData.avatarUrl}
            alt={profileData.username}
            sx={{ width: 120, height: 120, mb: 2, bgcolor: deepPurple[500] }}
          />
          <Typography variant="h4">{profileData.username}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Decentralized Media Enthusiast
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            {["followers", "following", "upvotes", "downvotes"].map(
              (item, idx) => (
                <Grid item key={idx} xs={6} sm={3}>
                  <Typography variant="h6">{profileData[item]}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Typography>
                </Grid>
              ),
            )}
          </Grid>
          <Button color="primary" sx={{ mt: 2 }}>
            Follow
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export default ProfilePage;
