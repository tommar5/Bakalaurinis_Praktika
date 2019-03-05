import React, { Component } from 'react'

import language from "../../../../translations/translation"

import Language from './LanguageSelect'

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  grow: {
    padding: 20,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Footer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <footer>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Grid container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography variant="subtitle1" className={classes.grow}>
                                <b>Go</b>Travel
                            </Typography>
                            <Language />
                        </Grid>
                    </Grid>
                </Grid>
                            {/* <Navbar  variant="light" expand="sm" fixed="bottom" style={{borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColore: "#dadce0" }}>
                                <Navbar.Brand href="#home"><b>Go</b>Travel</Navbar.Brand>
                                <Form inline>
                                    <ButtonToolbar>
                                        <DropdownButton
                                            size = "sm"
                                            drop="up"
                                            variant="light"
                                            title={<div style={{float: "left"}}>
                                                <span> {language.footer.button.language} ·</span>
                                                <span> {language.footer.button.country}</span>
                                                </div>}
                                            id={`language-dropdown-button-drop-up`}
                                            key={`up`}
                                        >
                                            <Dropdown.Header><b>{language.footer.label.changeLanguage}</b></Dropdown.Header>
                                            <Dropdown.Item eventKey="1">English</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Lietuvių</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Русский</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                    <ButtonToolbar>
                                        <DropdownButton
                                            size = "sm"
                                            drop="up"
                                            variant="light"
                                            title={<div style={{float: "left"}}>
                                                <span> {language.footer.button.country} ·</span>
                                                <span> Lithuania</span>
                                                </div>}
                                            id={`country-dropdown-button-drop-up`}
                                            key={`up`}
                                        >
                                            <Dropdown.Header><b>{language.footer.label.changeCountry}</b></Dropdown.Header>
                                            <Dropdown.Item eventKey="1">Lithuania</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Latvia</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Estonia</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                    <ButtonToolbar>
                                        <DropdownButton
                                            size = "sm"
                                            drop="up"
                                            variant="light"
                                            title={<div style={{float: "left"}}>
                                                <span> {language.footer.button.currency} ·</span>
                                                <span> EUR</span>
                                                </div>}
                                            id={`currency-dropdown-button-drop-up`}
                                            key={`up`}
                                        >
                                            <Dropdown.Header><b>{language.footer.label.changeCurrency}</b></Dropdown.Header>
                                            <Dropdown.Item eventKey="1">Euro Eur</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">US Dollar USD</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Polish Zloty PLN</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                </Form>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                        <div style={{float: "left"}}>
                            <span>Find the cheapest and best flights, hotels and cruises for you.</span>
                        </div>
                        </Col>
                    </Row> */}
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);