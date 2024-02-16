const componentStyleOveride = () => {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none'          
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 1
      },
      styleOverrides: {
        root: {
          borderRadius: '20px',
          padding: '30px',
          boxShadow: 'rgb(0 0 0 / 59%) 6px 6px 20px 6px'
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            padding: '0px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '20px'
        }
      }
    }
  }
}

export default componentStyleOveride;