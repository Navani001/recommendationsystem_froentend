import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


import FormControl from '@mui/joy/FormControl';

import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';


 function InputSubscription(props) {
  const [data, setData] = React.useState({
    email: '',
    status: 'initial',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
   props.fetch(data.email)
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl>
      
       
        <Input
          sx={{ '--Input-decoratorChildHeight': '30px',paddingRight:0,margin:0}}
          placeholder={localStorage.getItem('name')}
          type="text"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: 'initial' })
          }
          error={data.status === 'failure'}
          endDecorator={
            <Button
              variant="solid"
            
              loading={data.status === 'loading'}
              type="submit"
              sx={{backgroundColor:"#0B6BCB",color:"white", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
         set
            </Button>
          }
        />
        {data.status === 'failure' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}
        {data.status === 'sent' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
          >
            You are all set!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="flex bg-black h-full w-full justify-end">
      <Button
        aria-describedby={id}
        variant="contained"
        sx={{ backgroundColor: "black" }}
        onClick={handleClick}
      >
        <AccountCircleIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{padding:"0"}}>
            <InputSubscription fetch={(name)=>{
localStorage.setItem("name",name)       
            }}/>
          {/* <input
            className="w-12  h-full border-black focus:outline-none"
            type="text"
          ></input>
          <button
            className="bg-blue-600"
            onClick={() => {
              console.log("clicked");
            }}
          >
            set
          </button> */}
        </Typography>
      </Popover>
    </div>
  );
}
