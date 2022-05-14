// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc2],
      2: [ctc0, ctc1, ctc1, ctc2, ctc2],
      4: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Data({
    Buyer0_53: ctc1,
    Seller0_53: ctc1
    });
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v315, v316, v317, v318], secs: v320, time: v319, didSend: v43, from: v314 } = txn1;
  const v321 = stdlib.tokenEq(v315, v316);
  const v322 = v321 ? false : true;
  stdlib.assert(v322, {
    at: './degen-swap.rsh:24:10:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Buyer'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v339, time: v338, didSend: v52, from: v337 } = txn2;
  ;
  ;
  const v351 = stdlib.addressEq(v314, v337);
  stdlib.assert(v351, {
    at: './degen-swap.rsh:26:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v365 = stdlib.protect(ctc2, await interact.accSwap(v315, v316, v317), {
    at: './degen-swap.rsh:41:40:application',
    fs: ['at ./degen-swap.rsh:39:16:application call to [unknown function] (defined at: ./degen-swap.rsh:39:16:function exp)', 'at ./degen-swap.rsh:29:7:application call to "runBuyer0_53" (defined at: ./degen-swap.rsh:39:8:function exp)', 'at ./degen-swap.rsh:29:7:application call to [unknown function] (defined at: ./degen-swap.rsh:29:7:function exp)'],
    msg: 'accSwap',
    who: 'Buyer'
    });
  const v368 = ['Buyer0_53', v317];
  
  const txn3 = await (ctc.sendrecv({
    args: [v314, v315, v316, v317, v318, v368],
    evt_cnt: 1,
    funcNum: 2,
    lct: v338,
    onlyIf: v365,
    out_tys: [ctc3],
    pay: [v317, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v373], secs: v375, time: v374, didSend: v116, from: v372 } = txn3;
      
      switch (v373[0]) {
        case 'Buyer0_53': {
          const v376 = v373[1];
          const v383 = stdlib.add(stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'), v376);
          sim_r.txns.push({
            amt: v376,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v385 = ctc.iam(v372);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Seller0_53': {
          const v463 = v373[1];
          const v470 = stdlib.add(stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'), v463);
          sim_r.txns.push({
            amt: v463,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v470,
            kind: 'from',
            to: v314,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./degen-swap.rsh:35:29:decimal', stdlib.UInt_max, '1'),
            kind: 'from',
            to: v314,
            tok: v315
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v316
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v315
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: ['time', v318],
    tys: [ctc4, ctc0, ctc0, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v552, time: v551, didSend: v176, from: v550 } = txn4;
    ;
    const v553 = stdlib.addressEq(v314, v550);
    stdlib.assert(v553, {
      at: './degen-swap.rsh:51:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    ;
    ;
    return;
    
    }
  else {
    const {data: [v373], secs: v375, time: v374, didSend: v116, from: v372 } = txn3;
    switch (v373[0]) {
      case 'Buyer0_53': {
        const v376 = v373[1];
        const v383 = stdlib.add(stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'), v376);
        ;
        const v385 = ctc.iam(v372);
        const txn4 = await (ctc.sendrecv({
          args: [v314, v315, v316, v317, v383, v385],
          evt_cnt: 0,
          funcNum: 4,
          lct: v374,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./degen-swap.rsh:45:13:dot', stdlib.UInt_max, '0'), [[v317, v316]]],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v388, time: v387, didSend: v125, from: v386 } = txn4;
            
            ;
            sim_r.txns.push({
              amt: v317,
              kind: 'to',
              tok: v316
              });
            sim_r.txns.push({
              amt: v383,
              kind: 'from',
              to: v314,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v317,
              kind: 'from',
              to: v314,
              tok: v316
              });
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./degen-swap.rsh:47:18:decimal', stdlib.UInt_max, '1'),
              kind: 'from',
              to: v385,
              tok: v315
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v316
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v315
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc1, ctc1, ctc4],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v388, time: v387, didSend: v125, from: v386 } = txn4;
        ;
        ;
        const v398 = stdlib.addressEq(v385, v386);
        stdlib.assert(v398, {
          at: './degen-swap.rsh:45:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Buyer'
          });
        ;
        ;
        ;
        return;
        
        
        
        break;
        }
      case 'Seller0_53': {
        const v463 = v373[1];
        const v470 = stdlib.add(stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'), v463);
        ;
        const v524 = stdlib.addressEq(v372, v314);
        stdlib.assert(v524, {
          at: './degen-swap.rsh:29:7:application',
          fs: [],
          msg: null,
          who: 'Buyer'
          });
        ;
        ;
        return;
        
        break;
        }
      }}
  
  
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Data({
    Buyer0_53: ctc1,
    Seller0_53: ctc1
    });
  const ctc5 = stdlib.T_Address;
  
  
  const v303 = stdlib.protect(ctc2, await interact.getSwap(), {
    at: './degen-swap.rsh:22:68:application',
    fs: ['at ./degen-swap.rsh:21:14:application call to [unknown function] (defined at: ./degen-swap.rsh:21:18:function exp)'],
    msg: 'getSwap',
    who: 'Seller'
    });
  const v304 = v303[stdlib.checkedBigNumberify('./degen-swap.rsh:22:68:application', stdlib.UInt_max, '0')];
  const v305 = v303[stdlib.checkedBigNumberify('./degen-swap.rsh:22:68:application', stdlib.UInt_max, '1')];
  const v306 = v303[stdlib.checkedBigNumberify('./degen-swap.rsh:22:68:application', stdlib.UInt_max, '2')];
  const v307 = v303[stdlib.checkedBigNumberify('./degen-swap.rsh:22:68:application', stdlib.UInt_max, '3')];
  const v312 = stdlib.tokenEq(v304, v305);
  const v313 = v312 ? false : true;
  stdlib.assert(v313, {
    at: './degen-swap.rsh:23:11:application',
    fs: ['at ./degen-swap.rsh:21:14:application call to [unknown function] (defined at: ./degen-swap.rsh:21:18:function exp)'],
    msg: null,
    who: 'Seller'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v304, v305, v306, v307],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./degen-swap.rsh:24:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./degen-swap.rsh:24:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v315, v316, v317, v318], secs: v320, time: v319, didSend: v43, from: v314 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v315
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v316
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v315, v316, v317, v318], secs: v320, time: v319, didSend: v43, from: v314 } = txn1;
  const v321 = stdlib.tokenEq(v315, v316);
  const v322 = v321 ? false : true;
  stdlib.assert(v322, {
    at: './degen-swap.rsh:24:10:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Seller'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v314, v315, v316, v317, v318],
    evt_cnt: 0,
    funcNum: 1,
    lct: v319,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'), [[stdlib.checkedBigNumberify('./degen-swap.rsh:26:19:decimal', stdlib.UInt_max, '1'), v315]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v339, time: v338, didSend: v52, from: v337 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./degen-swap.rsh:26:19:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v315
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v339, time: v338, didSend: v52, from: v337 } = txn2;
  ;
  ;
  const v351 = stdlib.addressEq(v314, v337);
  stdlib.assert(v351, {
    at: './degen-swap.rsh:26:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v358 = stdlib.protect(ctc3, await interact.cancel(), {
    at: './degen-swap.rsh:32:37:application',
    fs: ['at ./degen-swap.rsh:30:17:application call to [unknown function] (defined at: ./degen-swap.rsh:30:17:function exp)', 'at ./degen-swap.rsh:29:7:application call to "runSeller0_53" (defined at: ./degen-swap.rsh:30:8:function exp)', 'at ./degen-swap.rsh:29:7:application call to [unknown function] (defined at: ./degen-swap.rsh:29:7:function exp)'],
    msg: 'cancel',
    who: 'Seller'
    });
  const v361 = ['Seller0_53', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  
  const txn3 = await (ctc.sendrecv({
    args: [v314, v315, v316, v317, v318, v361],
    evt_cnt: 1,
    funcNum: 2,
    lct: v338,
    onlyIf: v358,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./degen-swap.rsh:31:9:decimal', stdlib.UInt_max, '1'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v373], secs: v375, time: v374, didSend: v116, from: v372 } = txn3;
      
      switch (v373[0]) {
        case 'Buyer0_53': {
          const v376 = v373[1];
          const v383 = stdlib.add(stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'), v376);
          sim_r.txns.push({
            amt: v376,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v385 = v372;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Seller0_53': {
          const v463 = v373[1];
          const v470 = stdlib.add(stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'), v463);
          sim_r.txns.push({
            amt: v463,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v470,
            kind: 'from',
            to: v314,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./degen-swap.rsh:35:29:decimal', stdlib.UInt_max, '1'),
            kind: 'from',
            to: v314,
            tok: v315
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v316
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v315
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: ['time', v318],
    tys: [ctc5, ctc0, ctc0, ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v314, v315, v316, v317, v318],
      evt_cnt: 0,
      funcNum: 3,
      lct: v338,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./degen-swap.rsh:51:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v552, time: v551, didSend: v176, from: v550 } = txn4;
        
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'),
          kind: 'from',
          to: v314,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./degen-swap.rsh:52:30:decimal', stdlib.UInt_max, '1'),
          kind: 'from',
          to: v314,
          tok: v315
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v316
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v315
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v552, time: v551, didSend: v176, from: v550 } = txn4;
    ;
    const v553 = stdlib.addressEq(v314, v550);
    stdlib.assert(v553, {
      at: './degen-swap.rsh:51:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    ;
    ;
    return;
    
    }
  else {
    const {data: [v373], secs: v375, time: v374, didSend: v116, from: v372 } = txn3;
    switch (v373[0]) {
      case 'Buyer0_53': {
        const v376 = v373[1];
        const v383 = stdlib.add(stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'), v376);
        ;
        const v385 = v372;
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 4,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v388, time: v387, didSend: v125, from: v386 } = txn4;
        ;
        ;
        const v398 = stdlib.addressEq(v385, v386);
        stdlib.assert(v398, {
          at: './degen-swap.rsh:45:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Seller'
          });
        ;
        ;
        ;
        return;
        
        
        
        break;
        }
      case 'Seller0_53': {
        const v463 = v373[1];
        const v470 = stdlib.add(stdlib.checkedBigNumberify('./degen-swap.rsh:26:15:decimal', stdlib.UInt_max, '1'), v463);
        ;
        const v524 = stdlib.addressEq(v372, v314);
        stdlib.assert(v524, {
          at: './degen-swap.rsh:29:7:application',
          fs: [],
          msg: null,
          who: 'Seller'
          });
        ;
        ;
        return;
        
        break;
        }
      }}
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAKAAEEAiAoODCgjQYIJgIBAAAiNQAxGEEDyylkSSJbNQEhCVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAAjtJgQMMQAFGSSQMQACzJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/iEFWzX9IQdbNfxXQCA1+4AEkSc087A0/DT9iANvNPsxABJEsSKyATQDIQZbsggjshA0/7IHs7EisgE0/LISJLIQNP+yFDT9shGzsSKyASOyEiSyEDT7shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT9shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAo1IJTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf6ABKdlxLSwMgY0AyEGWw9ENP8xABJEsSKyASOyCCOyEDT/sgezsSKyASOyEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDQDIQVbshGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAgBIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+IQVbNf0hB1s1/Ek1BTX7gAQeBuawNPtQsDIGNAMhBlsMRDT7IlVAADw0+yNbNfojNPoINfk0+ogB/TEANfg0/zT+FlA0/RZQNPwWUDT5FlA0+FAoSwFXAGBnSCQ1ATIGNQJCAZU0+yNbNfo0+ogBxzEANP8SRLEisgEjNPoIsggjshA0/7IHs7EisgEjshIkshA0/7IUNP6yEbOxIrIBIrISJLIQMgmyFTIKshQ0/bIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgESSSMMQABtSCM0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQRbNf4hBVs1/SEHWzX8IQZbNfuABJqLkXSwI4gBKCM0/ogBOjT/MQASRDT/NP4WUDT9FlA0/BZQNPsWUChLAVcAQGdIJTUBMgY1AkIAu0giNAESRDQESSISTDQCEhFESTUFSUoiWzX/IQlbNf6BEFs1/YEYWzX8gAT27avSNP8WUDT+FlA0/RZQNPwWULAhCIgAszT/NP4TRCEIiACosSKyASKyEiSyEDIKshQ0/7IRsyEIiACQsSKyASKyEiSyEDIKshQ0/rIRszEANP8WUDT+FlA0/RZQNPwWUChLAVcAQGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v315",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v316",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v318",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v315",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v316",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v318",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T5",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Buyer0_53",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Seller0_53",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T5",
                "name": "v373",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T5",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Buyer0_53",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Seller0_53",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T5",
                "name": "v373",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001500380380620015008339810160408190526200002691620002d5565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b039081168486015291810151909116606080840191909152818401516080840152015160a082015290517f5e4bad3b30ac7b53a00eb30f52e4f07cfee462f2d3d2b53d3f3aed614bef54009181900360c00190a1620000e28160200151602001516001600160a01b03168260200151600001516001600160a01b031614620000d7576001620000da565b60005b6007620001b1565b620000f034156008620001b1565b6040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528c88018051516001600160a01b03908116895281518a01518116885281518e01518652905186015183526001998a9055439099558b5197880152945187169986019990995291519094169383019390935291519481019490945251908301529060c00160405160208183030381529060405260029080519060200190620001a8929190620001db565b505050620003c5565b81620001d75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001e99062000388565b90600052602060002090601f0160209004810192826200020d576000855562000258565b82601f106200022857805160ff191683800117855562000258565b8280016001018555821562000258579182015b82811115620002585782518255916020019190600101906200023b565b50620002669291506200026a565b5090565b5b808211156200026657600081556001016200026b565b604051608081016001600160401b0381118282101715620002b257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620002d057600080fd5b919050565b600081830360a0811215620002e957600080fd5b604080519081016001600160401b03811182821017156200031a57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200033457600080fd5b6200033e62000281565b91506200034e60208501620002b8565b82526200035e60408501620002b8565b60208301526060840151604083015260808401516060830152816020820152809250505092915050565b600181811c908216806200039d57607f821691505b60208210811415620003bf57634e487b7160e01b600052602260045260246000fd5b50919050565b61112b80620003d56000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063a7661d54146100d6578063ab53f2c6146100e9578063ae73df481461010c57005b80631e93b0f1146100775780632c10a1591461009b57806373b4522c146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610d98565b61011f565b6100756100bc366004610d98565b610319565b3480156100cd57600080fd5b50600154610088565b6100756100e4366004610d98565b6104bb565b3480156100f557600080fd5b506100fe610670565b604051610092929190610ddc565b61007561011a366004610e16565b61070d565b61012f600160005414600c610a8a565b6101498135158061014257506001548235145b600d610a8a565b60008080556002805461015b90610e28565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610e28565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610e79565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021f929190610f18565b60405180910390a1610235600134146009610a8a565b61024f6102483383602001516001610ab0565b600a610a8a565b8051610267906001600160a01b03163314600b610a8a565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d8d0151821687528d86015185528d84015183526002998a9055436001558c51808a019190915296518116878d0152945190941692850192909252519083015251818501528551808203909401845260c001909452815192936103139391920190610cc2565b50505050565b6103296002600054146016610a8a565b6103438135158061033c57506001548235145b6017610a8a565b60008080556002805461035590610e28565b80601f016020809104026020016040519081016040528092919081815260200182805461038190610e28565b80156103ce5780601f106103a3576101008083540402835291602001916103ce565b820191906000526020600020905b8154815290600101906020018083116103b157829003601f168201915b50505050508060200190518101906103e69190610e79565b90506103fa81608001514310156018610a8a565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c6338360405161042b929190610f18565b60405180910390a161043f34156014610a8a565b8051610457906001600160a01b031633146015610a8a565b80516040516001600160a01b039091169060009060019082818181858883f1935050505015801561048c573d6000803e3d6000fd5b506104a1816020015182600001516001610ac8565b600080805560018190556104b790600290610d46565b5050565b6104cb600460005414601c610a8a565b6104e5813515806104de57506001548235145b601d610a8a565b6000808055600280546104f790610e28565b80601f016020809104026020016040519081016040528092919081815260200182805461052390610e28565b80156105705780601f1061054557610100808354040283529160200191610570565b820191906000526020600020905b81548152906001019060200180831161055357829003601f168201915b50505050508060200190518101906105889190610f50565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516105bb929190610f18565b60405180910390a16105cf34156019610a8a565b6105ec6105e53383604001518460600151610ab0565b601a610a8a565b60a0810151610607906001600160a01b03163314601b610a8a565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610644573d6000803e3d6000fd5b5061065c816040015182600001518360600151610ac8565b6104a181602001518260a001516001610ac8565b60006060600054600280805461068590610e28565b80601f01602080910402602001604051908101604052809291908181526020018280546106b190610e28565b80156106fe5780601f106106d3576101008083540402835291602001916106fe565b820191906000526020600020905b8154815290600101906020018083116106e157829003601f168201915b50505050509050915091509091565b61071d6002600054146011610a8a565b6107378135158061073057506001548235145b6012610a8a565b60008080556002805461074990610e28565b80601f016020809104026020016040519081016040528092919081815260200182805461077590610e28565b80156107c25780601f10610797576101008083540402835291602001916107c2565b820191906000526020600020905b8154815290600101906020018083116107a557829003601f168201915b50505050508060200190518101906107da9190610e79565b90506108106040518060800160405280600081526020016000815260200160006001600160a01b03168152602001600081525090565b610821826080015143106013610a8a565b7f1bd73902f268e32388f15f72446be7d2ca19d82840fde598b7fe5d5c36aab71e3384604051610852929190611014565b60405180910390a1600061086c604085016020860161107b565b600181111561087d5761087d610ffe565b14156109b6576040830135808252610896906001611096565b602082015280516108aa903414600e610a8a565b33604080830191909152805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b039081168252602080850151821681840152604080860151831681850152606080870151908501528482015160808501528481015190921660a0840152600460005543600155905161098b9183910181516001600160a01b039081168252602080840151821690830152604080840151821690830152606080840151908301526080808401519083015260a092830151169181019190915260c00190565b604051602081830303815290604052600290805190602001906109af929190610cc2565b5050505050565b60016109c8604085016020860161107b565b60018111156109d9576109d9610ffe565b1415610a85576060808401359082018190526109f8903414600f610a8a565b8151610a10906001600160a01b031633146010610a8a565b81600001516001600160a01b03166108fc82606001516001610a329190611096565b6040518115909202916000818181858888f19350505050158015610a5a573d6000803e3d6000fd5b50610a6f826020015183600001516001610ac8565b60008080556001819055610a8590600290610d46565b505050565b816104b75760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610abe83853085610adc565b90505b9392505050565b610ad3838383610bb6565b610a8557600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610b43916110bc565b60006040518083038185875af1925050503d8060008114610b80576040519150601f19603f3d011682016040523d82523d6000602084013e610b85565b606091505b5091509150610b9682826001610c87565b5080806020019051810190610bab91906110d8565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610c15916110bc565b60006040518083038185875af1925050503d8060008114610c52576040519150601f19603f3d011682016040523d82523d6000602084013e610c57565b606091505b5091509150610c6882826002610c87565b5080806020019051810190610c7d91906110d8565b9695505050505050565b60608315610c96575081610ac1565b825115610ca65782518084602001fd5b60405163100960cb60e01b815260048101839052602401610aa7565b828054610cce90610e28565b90600052602060002090601f016020900481019282610cf05760008555610d36565b82601f10610d0957805160ff1916838001178555610d36565b82800160010185558215610d36579182015b82811115610d36578251825591602001919060010190610d1b565b50610d42929150610d83565b5090565b508054610d5290610e28565b6000825580601f10610d62575050565b601f016020900490600052602060002090810190610d809190610d83565b50565b5b80821115610d425760008155600101610d84565b600060408284031215610daa57600080fd5b50919050565b60005b83811015610dcb578181015183820152602001610db3565b838111156103135750506000910152565b8281526040602082015260008251806040840152610e01816060850160208701610db0565b601f01601f1916919091016060019392505050565b600060808284031215610daa57600080fd5b600181811c90821680610e3c57607f821691505b60208210811415610daa57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610e7457600080fd5b919050565b600060a08284031215610e8b57600080fd5b60405160a0810181811067ffffffffffffffff82111715610ebc57634e487b7160e01b600052604160045260246000fd5b604052610ec883610e5d565b8152610ed660208401610e5d565b6020820152610ee760408401610e5d565b604082015260608301516060820152608083015160808201528091505092915050565b8015158114610d8057600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610f4081610f0a565b8015156040840152509392505050565b600060c08284031215610f6257600080fd5b60405160c0810181811067ffffffffffffffff82111715610f9357634e487b7160e01b600052604160045260246000fd5b604052610f9f83610e5d565b8152610fad60208401610e5d565b6020820152610fbe60408401610e5d565b60408201526060830151606082015260808301516080820152610fe360a08401610e5d565b60a08201529392505050565b803560028110610e7457600080fd5b634e487b7160e01b600052602160045260246000fd5b6001600160a01b0383168152813560208083019190915260a082019061103b908401610fef565b6002811061105957634e487b7160e01b600052602160045260246000fd5b8060408401525060408301356060830152606083013560808301529392505050565b60006020828403121561108d57600080fd5b610ac182610fef565b600082198211156110b757634e487b7160e01b600052601160045260246000fd5b500190565b600082516110ce818460208701610db0565b9190910192915050565b6000602082840312156110ea57600080fd5b8151610ac181610f0a56fea2646970667358221220936d5e417a8e5637a618bec25f86dc7687beae544bae69934206d694a92cd9b464736f6c634300080c0033`,
  BytecodeLen: 5376,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './degen-swap.rsh:25:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './degen-swap.rsh:27:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './degen-swap.rsh:53:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './degen-swap.rsh:44:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './degen-swap.rsh:48:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './degen-swap.rsh:36:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Seller": Seller
  };
export const _APIs = {
  };
