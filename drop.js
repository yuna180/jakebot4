module.exports = {
name: "drop",
aliases: ["d" , "drp" , "dp"],
code:`
$setGlobalUserVar[DROPP;$randomtext[BTJH_BE;BTV_BE;BTRM_BE;BTSG_BE;BTJM_BE;BTJK_BE;BTJN_BE;TXHK_CW;TXTH_CW;TXBG_CW;TXSB_CW;TXYJ_CW;SOIU_CB;BVYY_BA;BVSH_BA;BVJW_BA;BVSY_BA;BVSG_BA;BIHN_CU;BISU_CU;BIMS_CU;BITK_CU;BISN_CU;BISY_CU;BIHR_CU;SOIU_PL;SOIU_LL;WVXJ_BY;WVKN_BY;NTLU_IP;NTSS_IP;NTLH_IP;NTAR_IP;NTSB_IP;NTCB_IP;NTHR_IP;NTUC_IP;NUDO_TS;NUJH_TS;NUMK_TS;NUTN_TS;NUTY_TS;TWNY_DN;TWJY_DN;TWMM_DN;TWSN_DN;TWJH_DN;TWMN_DN;TWDH_DN;TWCH_DN;TWTZ_DN;KLYJ_FI;KLXT_FI;KLMR_FI;KLCH_FI;KLDY_FI;KLHR_FI;KLBH_FI;KLYG_FI;KLYS_FI;NXHW_AM;NXLL_AM;NXSY_AM;NXJN_AM;NXBA_AM;NXJW_AM;NXKJ_AM;IVGA_LD;IVYJ_LD;IVRE_LD;IVWY_LD;IVLZ_LD;IVLS_LD;AEWN_SV;AEGS_SV;AEKA_SV;AENN_SV;SKBC_OD;SKLK_OD;SKCB_OD;SKHJ_OD;SKFL_OD;SKSE_OD;SKIN_OD;SKHN_OD;BPJS_TA;BPJN_TA;BPRO_TA;BPLS_TA;TWNY_FY;TWMM_FY;TWJY_FY;TWSN_FY;TWJH_FY;TWDH_FY;TWMN_FY;TWCH_FY;TWTZ_FY;BTJK_MP;BTJN_MP;BTSG_MP;BTJH_MP;BTRM_MP;BTJM_MP;BTV_MP;N7TA_ST;N7JN_ST;N7YT_ST;N7TY_ST;N7DO_ST;N7JH_ST;N7JW_ST;N7HC_ST;N7MK_ST;RVYR_FR;RVJO_FR;RVSG_FR;RVIR_FR;RVWD_FR;ITYJ_GW;ITLI_GW;ITRJ_GW;ITCY_GW;ITYU_GW;ENNK_TD;ENSU_TD;ENSH_TD;ENJK_TD;ENJA_TD;ENHS_TD;ENJW_TD;SCSE_ST;SCIS_ST;SCSI_ST;SCJ_ST;SCYO_ST;SCSM_ST;SOKW_TT;WVWW_LT;WVTN_LT;WVHD_LT;WVXJ_LT;WVLC_LT;WVKN_LT;WVYY_LT;SOYJ_CA;SOBB_RB;]]
$setVar[$getGlobalUserVar[DROPP]_OWNERS;$sum[$getVar[$getGlobalUserVar[DROPP]_OWNERS];1]]
$setGlobalUserVar[$getGlobalUserVar[DROPP];$sum[$getGlobalUserVar[$getGlobalUserVar[DROPP]];1]]
$setGlobalUserVar[card;$sum[$getGlobalUserVar[card];1]]
<@$authorID>
$description[1;<:JS_cards:967919918567800892> - You have dropped:
\`$getGlobalUserVar[DROPP]\`
Card : 
<:JS_whitearrow:962157618292457553> **Group** : $getGlobalUserVar[$getGlobalUserVar[DROPP]_GROUP]
<:JS_whitearrow:962157618292457553> **Name** : $getGlobalUserVar[$getGlobalUserVar[DROPP]_NAME]
<:JS_whitearrow:962157618292457553> **Era** : $getGlobalUserVar[$getGlobalUserVar[DROPP]_ERA]
<:JS_whitearrow:962157618292457553> **Rarity** : $getGlobalUserVar[$getGlobalUserVar[DROPP]_RARITY]
$image[1;$getGlobalUserVar[$getGlobalUserVar[DROPP]_IMAGE]]
Card Print : \`#$sum[$getVar[$getGlobalUserVar[DROPP]_OWNERS];1]\`
$color[1;#303135]
$globalCooldown[10m; You are on cooldown for **%time%** ]
$addTimestamp[1]
`
}




