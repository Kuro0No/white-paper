import React, { useEffect, useRef, useState } from 'react';
import './index.scss'
import { Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';
import breeding1 from '../../assets/img/breeding1.png'
import breeding2 from '../../assets/img/breeding2.png'
import breeding3 from '../../assets/img/breeding3.png'
import CopyLink from 'components/common/CopyLink';
import more from '../../assets/icon/more.png'
import UseClickOutSide from 'customHook/useClickOutside';
import arrowBack from '../../assets/icon/arrow-back.png'
import arrowForward from '../../assets/icon/arrow-forward.png'


function createData(breedCount, breedNumber, SLPCostPerParent) {
  return { breedCount, breedNumber, SLPCostPerParent };
}

const rows = [
  createData('0/7', 1, 900),
  createData('1/7', 2, 1350),
  createData('2/7', 3, 2250),
  createData('3/7', 4, 3600),
  createData('4/7', 5, 5650),
  createData('5/7', 6, 9450),
  createData('6/7', 7, 153000),
];


const Breeding = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openToasty, setOpenToasty] = useState(false);
  const [chooseIconReact, setChooseIconReact] = useState('')
  const [widthScreen,setWidthScreen] = useState(window.innerWidth)

  useEffect(() => {
    const handle = () => {
      setWidthScreen(window.innerWidth)

    }
    window.addEventListener('resize', handle)
    

    return () => window.removeEventListener('resize',handle)
  }, [])

  

  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const moreRef = useRef(null)
  UseClickOutSide(moreRef, () => setAnchorEl(null))


  return <div className='row breeding-wrapper'>
    <div className='breeding_container col-xl-10 col-12'>
      <div className='title d-flex justify-content-between'>

        <div>{title}</div>
       {widthScreen < 1200 && <div ref={moreRef} className='more-container'>
          <img className='more-icon' onClick={handleClick} src={more} width={24} />
          <Menu

            open={ openMenu}
            getContentAnchorEl={null}
            anchorEl={anchorEl}
            elevation={0}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <MenuItem >
              <CopyLink borderLeft={false} openToasty={openToasty} setOpenToasty={setOpenToasty} />
            </MenuItem>
          </Menu>
     
        </div> }
      </div>
      <div className='des-above-table'>
        <p>Like real-world pets, Axies can be bred to create new offspring. To avoid hyperinflation of Axies there is a maximum amount of times an Axie can be bred before it is sterile.
        </p>
        <p>Breeding an Axie costs AXS and some Smooth Love Potions depending on how many times the Axies have been bred. The AXS portion is variable and subject to adjustment based on a myriad of economic factors.
        </p>
        <p>Axies cannot be bred with their children and Axies cannot breed with their siblings.
        </p>
        <p>Axie Infinity does not sell $SLP to players directly.
        </p>
      </div>
      <div className='table'>
        <TableContainer >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className='border--right border-top--none' >Breed Count</TableCell>
                <TableCell className='border--right border-top--none' >Breed Number</TableCell>
                <TableCell className='border-top--none' >SLP Cost Per Parent</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                >
                  <TableCell className='border--right'>({row.breedCount})</TableCell>
                  <TableCell className='border--right'>{row.breedNumber}</TableCell>
                  <TableCell >{row.SLPCostPerParent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='des-table'>
        <p>
          Smooth Love potions can be earned by playing the game in the PvP Arena. Once you earn them, you can sync them to your wallet from this
          <a href='#' >&nbsp;page.</a>
        </p>
      </div>
      <div id='genetics'>
        <h2>Genetics <label>#</label></h2>
        <div>
          <p>Each Axie has 6 body parts as well as a body shape. For each part, an Axie possesses 3 genes. A dominant (D), recessive (R1), and minor recessive gene (R2).</p>
          <div className='py-4'>

            <img src={breeding1} />
          </div>
          <p>The dominant gene is what determines the body part that is physically present on the Axie. When breeding, each gene has a chance to be passed down to offspring:</p>
          <p>
            <label className='bold'>Dominant (D):&nbsp;</label>
            37.5% chance to pass this gene to offspring.
          </p>
          <p>
            <label className='bold'>Recessive (R1):&nbsp;</label>
            9.375% chance to pass this gene to offspring.
          </p>
          <p>
            <label className='bold'>Minor Recessive (R2):&nbsp;</label>
            3.125% chance to pass this gene to offspring.

          </p>
          <p>
            You can use&nbsp;
            <a href='https://freakitties.github.io/axie/calc.html?sireId=123&matronId=701'>this caculator</a>
            &nbsp;to look up the probabilities when breeding 2 Axies.
          </p>

          <p>
            While we don’t show recessive genes on our website yet, you can view them using&nbsp;
            <a href='https://chrome.google.com/webstore/detail/freaks-axie-extension/copjnifcecdedocejpaapepagaodgpbh?hl=en'>this extension</a>
            &nbsp;built by one of our community members, Freak.
          </p>
          <p>
            In order to breed, simply go to the page for one of your Axies by clicking on it through your
            <a href='https://marketplace.axieinfinity.com/profile/inventory/axie'> inventory.</a>
          </p>
          <div className='py-4'>
            <img src={breeding2} />
          </div>
          <p>Next, click “Breed”.</p>
          <div className='py-4'>

            <img src={breeding3} />
          </div>
          <p>Then select an Axie to pair it with!</p>
          <p className='bold'>How Long Does it take for an Axie to become an adult?</p>
          <p>Axies take 5 days to reach maturity.</p>
          <p>After 5 days, you can morph your egg to an adult Axie and see the Axie's genes.</p>

        </div>
      </div>
      <div style={{ padding: 35 }}></div>
      <div className='row pb-4 paper-container border--bot'>
        <div className='col-12 col-md-6 pl-0'>

          <div className=' d-flex p-3 justify-content-between paper'>
            <div>
              <img className='arrow' src={arrowBack} />

            </div>
            <div>
              <div className='action'>Previous</div>
              <div className='bold des-paper'>Tournaments and Esport</div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 p-3 d-flex justify-content-between paper'>
          <div >
            <div className='action'>Next</div>
            <div className='bold des-paper'>Axie Economy & Long-term Sustainability</div>
          </div>
          <div>
            <img className='arrow' src={arrowForward} />
          </div>
        </div>

      </div>

      <div className='footer mt-4 row '>

        <div className='d-flex description justify-content-center'>
          Last modified 7mo ago
        </div>
        <div className='d-flex description justify-content-center mt-3' >
          Was this page helpful?
          <div className='ml-2'>
            <Tooltip title='Poor content'>
              <svg onClick={() => setChooseIconReact('poor')} className={`ml-2 icon-footer ${chooseIconReact === 'poor' ? 'choose-icon' : ''} `} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-rnw-int-class="nearest___2130_" width={24} data-toggle="tooltip" data-placement="top" ><path fill="currentColor" d="M9.707 8.707a.993.993 0 00.006-1.396 1.007 1.007 0 00-1.408-.03C8.273 7.312 7.519 8 6 8c-1.497 0-2.251-.67-2.303-.717a1 1 0 00-1.404 1.424C2.425 8.839 3.653 10 6 10c2.347 0 3.575-1.161 3.707-1.293m12 0a.993.993 0 00.006-1.396 1.006 1.006 0 00-1.408-.03C20.273 7.312 19.519 8 18 8c-1.497 0-2.251-.67-2.303-.717a1 1 0 00-1.404 1.424C14.425 8.839 15.653 10 18 10c2.347 0 3.575-1.161 3.707-1.293M21.001 19a1 1 0 01-.896-.553C20.036 18.314 18.225 15 12 15c-6.225 0-8.036 3.314-8.11 3.456a1.002 1.002 0 01-1.344.43.997.997 0 01-.441-1.333C2.198 17.367 4.469 13 12 13s9.802 4.367 9.895 4.553A1.001 1.001 0 0121.001 19" fillRule="evenodd"></path></svg>

            </Tooltip>
            <Tooltip title='OK content'>
              <svg onClick={() => setChooseIconReact('ok')} className={`ml-2 icon-footer ${chooseIconReact === 'ok' ? 'choose-icon' : ''} `} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-rnw-int-class="nearest___2130_" width={24} data-toggle="tooltip" data-placement="top" ><path fill="currentColor" d="M10 8a1 1 0 00-1-1H3a1 1 0 100 2h6a1 1 0 001-1m12 0a1 1 0 00-1-1h-6a1 1 0 100 2h6a1 1 0 001-1m-1 9H3a1 1 0 110-2h18a1 1 0 110 2" fillRule="evenodd"></path></svg>

            </Tooltip>
            <Tooltip title='Excellent content'>
              <svg onClick={() => setChooseIconReact('excellent')} className={`ml-2 icon-footer ${chooseIconReact === 'excellent' ? 'choose-icon' : ''} `} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-rnw-int-class="nearest___2130_" width={24} data-toggle="tooltip" data-placement="top" ><path fill="currentColor" d="M9.707 8.707a.999.999 0 000-1.414C9.575 7.161 8.347 6 6 6 3.653 6 2.425 7.161 2.293 7.293a.992.992 0 00-.005 1.396 1.007 1.007 0 001.408.029C3.727 8.689 4.481 8 6 8c1.52 0 2.273.689 2.293.707a.997.997 0 001.414 0m12 0a.999.999 0 000-1.414C21.575 7.161 20.347 6 18 6c-2.347 0-3.575 1.161-3.707 1.293a.992.992 0 00-.005 1.396 1.006 1.006 0 001.407.029C15.727 8.689 16.481 8 18 8c1.52 0 2.273.689 2.293.707a.997.997 0 001.414 0M12 19c-7.53 0-9.8-4.367-9.894-4.553a1.001 1.001 0 011.786-.902C3.974 13.704 5.792 17 12 17c6.226 0 8.037-3.314 8.111-3.456a1.007 1.007 0 011.344-.43.998.998 0 01.441 1.333C21.802 14.633 19.531 19 12 19" fillRule="evenodd"></path></svg>

            </Tooltip>
          </div>
        </div>

      </div>
    </div>
    {widthScreen >= 1200 &&<div className='icon-copy-link col-xl-2  py-24 my-24'>

      <CopyLink borderLeft={true} openToasty={openToasty} setOpenToasty={setOpenToasty} />
    </div> }

  </div>;
};

export default Breeding;
