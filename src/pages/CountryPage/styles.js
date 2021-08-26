// Styled component import
import styled from "styled-components";

// Export the styles
export const Container = styled.main`
    /*MAIN TAG*/
    background: var(--Background);

    overflow: scroll;
    --ms-overflow-style: none;
    scrollbar-width: none;

    height: calc(100vh - 4.75rem);

    /*PREVENT SCROLLBAR WIDTH*/
    &::-webkit-scrollbar{
        display: none;
    }

    /*PAGE CONTENT*/
    #countryPageContent{
        margin: 0 auto 0 auto;
        padding: 3rem 2rem 0rem 2rem;

        max-width: 76rem;
        height: inherit;

        /*INPUT SECTION*/
        #inputSection{
            display: flex;

            align-items: center;
            justify-content: space-between;

            margin-bottom: 3rem;

            #backButton{
                background: var(--Elements);

                color: var(--Text);

                font-size: 0.85rem;
                font-weight: 600;

                border-radius: 8px;
                border: none;

                transition: 0.2s;

                width: 6rem;
                height: 2.5rem;

                /*EFEITO DE HOVER*/
                &:hover{
                    filter: opacity(0.6);
                }
            }
        }

        /*COUNTRY SECTION*/
        #countrySection{
            padding-bottom: 3rem;

            /*COUNTRY CONTAINER*/
            #countryContainer{
                display: flex;

                align-items: center;

                /*FLAG CONTAINER*/
                #flagContainer{
                    margin-right: 4rem;

                    width: 35rem;
                    height: auto;

                    /*FLAG*/
                    #flag{
                        width: 100%;
                        height: auto;
                    }
                }

                /*INFORMATION CONTAINER*/
                #countryInformation{
                    /*COUNTRY TITLE*/
                    h2{
                        color: var(--Text);

                        font-size: 1.6rem;
                        font-weight: 800;

                        margin-bottom: 2rem;
                    }

                    /*INFORMATION CONTAINER*/
                    #informationContainer{
                        display: flex;

                        line-height: 1.8;

                        /*LEFT INFORMATION*/
                        #leftInformation{
                            margin-right: 4rem;

                            /*STRONG TEXT*/
                            .strong{
                                color: var(--Text);

                                font-size: 0.85rem;
                                font-weight: 700;
                            }

                            /*NORMAL TEXT*/
                            .normal{
                                color: var(--Text);

                                font-size: 0.85rem;
                                font-weight: 300;
                            }
                        }

                        /*RIGHT INFORMATION*/
                        #rightInformation{
                            /*STRONG TEXT*/
                            .strong{
                                color: var(--Text);

                                font-size: 0.85rem;
                                font-weight: 700;
                            }

                            /*NORMAL TEXT*/
                            .normal{
                                color: var(--Text);

                                font-size: 0.85rem;
                                font-weight: 300;

                                /*AFTER CONTENT*/
                                &::after{
                                    content: ", ";
                                }

                                /*LAST CHILD*/
                                &:last-child{
                                    /*AFTER*/
                                    &::after{
                                        content: "";
                                    }
                                }
                            }
                        }
                    }

                    /*BORDER COUNTRIES CONTAINER*/
                    #spanContainer{
                        margin-top: 2rem;

                        /*STRONG TEXT*/
                        .strong{
                            color: var(--Text);

                            font-size: 0.85rem;
                            font-weight: 700;
                        }

                        /*NORMAL TEXT*/
                        .normal{
                            color: var(--Text);

                            font-size: 0.85rem;
                            font-weight: 300;

                            /*AFTER CONTENT*/
                            &::after{
                                content: ", ";
                            }

                            /*LAST CHILD*/
                            &:last-child{
                                /*AFTER*/
                                &::after{
                                    content: "";
                                }
                            }
                        }
                    }
                }
            }
        }

        /*MEDIA FOR COUNTRY SECTION*/
        @media(max-width: 67rem){
            /*COUNTRY SECTION*/
            #countrySection{
                /*COUNTRY CONTAINER*/
                #countryContainer{
                    display: block;

                    /*FLAG CONTAINER*/
                    #flagContainer{
                        margin: 0 0 2rem 0;

                        width: 100%;
                    }
                }
            }
        }
        @media(max-width: 29.5rem){
            /*COUNTRY SECTION*/
            #countrySection{
                /*COUNTRY CONTAINER*/
                #countryContainer{
                    /*INFORMATION CONTAINER*/
                    #countryInformation{
                        #informationContainer{
                            display: block;
                        }
                    }
                }
            }
        }
    }
`;