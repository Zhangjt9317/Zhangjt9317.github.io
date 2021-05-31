/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/09/16/Bot-Framework-and-Bot-making/1.png","1954fa8ea1a92128da6fb28ed64bc64f"],["2020/09/16/Bot-Framework-and-Bot-making/2.png","6cc2ac24d3c7aa1de159554d9f140dfb"],["2020/09/16/Bot-Framework-and-Bot-making/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/09/16/Truffle-Petshop/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/09/18/Python-Parallelism-and-Concurrency/concurrent.png","07b3b23b258b3f1798bc7a043c78a9bc"],["2020/09/18/Python-Parallelism-and-Concurrency/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/09/18/Udemy-Microservices-with-Node-and-React/1.png","336388d9a1a75e378d74a7329f13a586"],["2020/09/18/Udemy-Microservices-with-Node-and-React/10.png","6cbcf55a62467d028575dc5ce3f35fe6"],["2020/09/18/Udemy-Microservices-with-Node-and-React/11.png","460a4213af836596b7e9013859a0b6e7"],["2020/09/18/Udemy-Microservices-with-Node-and-React/12.png","737cdaff3a2a640ee49ec9d01deadbb9"],["2020/09/18/Udemy-Microservices-with-Node-and-React/13.png","30fd1f770866c857119ec4df289d24de"],["2020/09/18/Udemy-Microservices-with-Node-and-React/14.png","c5aa97fbf8fe0a7d9d60ac1047702fbe"],["2020/09/18/Udemy-Microservices-with-Node-and-React/15.png","b8186ac5224dd3073fd9239a0c01a68e"],["2020/09/18/Udemy-Microservices-with-Node-and-React/2.png","6bf0af22da456ba4d60e2af5db73bda4"],["2020/09/18/Udemy-Microservices-with-Node-and-React/3.png","1676edbe5788269dd196bdc54ce85076"],["2020/09/18/Udemy-Microservices-with-Node-and-React/4.png","68b9d1d5de0e3d5c92abf43e96e0cc7a"],["2020/09/18/Udemy-Microservices-with-Node-and-React/5.png","f1668832a6cf60d60a34fdc761ea644e"],["2020/09/18/Udemy-Microservices-with-Node-and-React/6.png","be69b75ea329baaede570b79dafa7782"],["2020/09/18/Udemy-Microservices-with-Node-and-React/7.png","1bd1465df9143d64b7eb6439f7298e2f"],["2020/09/18/Udemy-Microservices-with-Node-and-React/8.png","5f8b1feaeca79321fc7e57ecbd9b9b16"],["2020/09/18/Udemy-Microservices-with-Node-and-React/9.png","852ca4a72a1dd306c0c53d3db1fdd8c5"],["2020/09/18/Udemy-Microservices-with-Node-and-React/big_problem.png","9e37a0362e5755ec2d458e725c2c38a5"],["2020/09/18/Udemy-Microservices-with-Node-and-React/change_of_scheme.png","f93e2b686305a71192fc2be097ab9546"],["2020/09/18/Udemy-Microservices-with-Node-and-React/db_for_everything.png","14a4d5cba39166fbfe7a2334d9796e3a"],["2020/09/18/Udemy-Microservices-with-Node-and-React/failed_feature_comm.png","83a43400483623d933fd35e5ebfa5fcc"],["2020/09/18/Udemy-Microservices-with-Node-and-React/feature_communication.png","652748ea430ef5fccfb7421f59ecf3ff"],["2020/09/18/Udemy-Microservices-with-Node-and-React/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/09/18/Udemy-Microservices-with-Node-and-React/microservice_def.png","40aa6b3f60d437fc707df0e89a520ac3"],["2020/09/18/Udemy-Microservices-with-Node-and-React/microservice_illustration.png","5d39edf2887be7aa585d7b3f2d221e09"],["2020/09/18/Udemy-Microservices-with-Node-and-React/mono_illus.png","68286d4c7d26f60948fa95d301f33b5c"],["2020/09/18/Udemy-Microservices-with-Node-and-React/monolith.png","4aa240fd1c690e404b6ab436bec83769"],["2020/09/18/Udemy-Microservices-with-Node-and-React/monolithic_server.png","de202a53f1a62df27750750cc3ebc8d7"],["2020/09/18/Udemy-Microservices-with-Node-and-React/own_database.png","debebeb939d809185fca498292e99f1a"],["2020/09/18/Udemy-Microservices-with-Node-and-React/why_dps.png","7800a30eb0817615cb9bfedd7ccdd4a7"],["2020/09/18/Udemy-Microservices-with-Node-and-React/why_microservice_key.png","c2f1ae6954fc74fde3e7c30ce27b2c09"],["2020/09/18/Udemy-Microservices-with-Node-and-React/why_microservices.png","e0796901d2365ae65f5ec8d9b5295e81"],["2020/09/23/Basics-of-Docker/docker.png","f3b4c9a35c97ffb30c1432b3cd30b129"],["2020/09/23/Basics-of-Docker/docker_example.png","506751f0ad22f0ac69e593236c76769d"],["2020/09/23/Basics-of-Docker/image.png","6cb43d5ac8fc08275fb6c6e2808088e6"],["2020/09/23/Basics-of-Docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/10/13/Redis-Usage-and-Design/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/10/17/Build-a-React-GraphQL-based-Social-Media-App/apollo-server.png","78a16d50ccf9b5a5ca5ad2349aa95a68"],["2020/10/17/Build-a-React-GraphQL-based-Social-Media-App/get_post.png","c4091d49b563063910cb7f71c0287863"],["2020/10/17/Build-a-React-GraphQL-based-Social-Media-App/graphql.png","b8c0dcdae9bc73be42c27038180aa62c"],["2020/10/17/Build-a-React-GraphQL-based-Social-Media-App/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/10/17/Build-a-React-GraphQL-based-Social-Media-App/insert_post_mongo.png","67e8c79b7b8e33824902acff37966c80"],["2020/10/17/Build-a-React-GraphQL-based-Social-Media-App/register.png","ef86481faadfb0afd93e56761a11a6d9"],["2020/10/17/Build-a-React-GraphQL-based-Social-Media-App/validator_check.png","8a9b9cdedd8f130dda33710f0ca8bcdc"],["2020/10/20/Java-Servlets-and-JSP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/10/30/ElasticSearch-Core-Knowledge-and-Practice/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/10/31/ML-clustering/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/11/24/Modern-React-and-Redux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/08/Android-原生基本知识/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/08/Flutter基本知识/flutter_arch.png","39f6b86de054b190d53038ad51a0f118"],["2020/12/08/Flutter基本知识/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/08/React的基础知识/html-boxes.png","3ebaa396aa2abffe64c5f84f6ceb2abe"],["2020/12/08/React的基础知识/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/08/Vue基本知识/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/08/前端面试-阿里/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/08/原生的JavaScript的DOM操作/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/08/数据挖掘中的不同算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/08/浏览器的渲染原理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/08/网络基本知识/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/09/JS基本知识/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/09/Spark技术总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/09/Webpack技术总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2020/12/09/网络安全基本知识/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/02/23/构建数据平台-埋点系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/02/24/实现SparrowRecsys/alibaba_dl_evol.jpg","b2606096aa4ff97461dd91b87d748db9"],["2021/02/24/实现SparrowRecsys/flow.jpg","066c5f56f4e0a5e8d4648e0cfb85e72e"],["2021/02/24/实现SparrowRecsys/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/02/24/实现SparrowRecsys/logic_structure.jpg","c75969c5fcc6e5e374a87d4b4b1d5d07"],["2021/02/24/实现SparrowRecsys/netflix_structure.jpg","4189db7d4ad86a74903dd2acb30742c0"],["2021/02/24/实现SparrowRecsys/recomm_structure.jpg","a87530cf45fb76480bf5b60b9feb60c1"],["2021/02/24/实现SparrowRecsys/traditional_decomp_vs_dl_decomp.jpg","3d786a8a7ab6141edaeb2383858b137e"],["2021/03/29/TS-Design-Patterns/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/03/30/Electron-应用与实例/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/03/30/Serverless/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/03/RPC实战与核心原理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/03/深入剖析k8s/container.jpg","d1bb34cda8744514ba4c233435bf4e96"],["2021/04/03/深入剖析k8s/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/04/Three-js-实战与应用/alpha.jpg","688ef477673dc89adfdf5f294101148c"],["2021/04/04/Three-js-实战与应用/amb_occ.jpg","689dd855a793dcdd568bd2bbd0a46c05"],["2021/04/04/Three-js-实战与应用/axes_helper.png","97b4d10a479d4d212b82780ce7ffa9ce"],["2021/04/04/Three-js-实战与应用/comb.png","d1fee7fff3576b751d32d519d13e5252"],["2021/04/04/Three-js-实战与应用/debug_ui.png","43a23a117cc3e2e425a147a0d1e462c0"],["2021/04/04/Three-js-实战与应用/door_albedo.jpg","29039012219ca409597cda0a5a289558"],["2021/04/04/Three-js-实战与应用/height.png","b5aedd655256cccc1c423005df56aec5"],["2021/04/04/Three-js-实战与应用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/04/Three-js-实战与应用/lookat.png","3e879a7d0a2cf30ae740dafbcfb44ad2"],["2021/04/04/Three-js-实战与应用/metalness.jpg","94273c9197e47ccfdc83e803c6a8ddf2"],["2021/04/04/Three-js-实战与应用/normal.jpg","ccdcd20bafa8b79e12e4e12095e8e26b"],["2021/04/04/Three-js-实战与应用/rotation.png","a27596ed4482f9d8a6e62b01a3454cbc"],["2021/04/04/Three-js-实战与应用/roughness.jpg","f029658ce6f318af90cf0da6082df87b"],["2021/04/04/Three-js-实战与应用/scale_objects.png","571d9d4ba071e5113a151d30574b2032"],["2021/04/04/Three-js-实战与应用/scene_graph.png","dc58c93ceb87d8cf7e4be1b0fc9d260b"],["2021/04/04/设计模式之美/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/05/TS入门指南/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/06/Antdesign-Pro设置与项目/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/15/AWS-Practice/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/17/css预处理器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/20/System-Design-Basics/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/20/System-Design-Cases/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/20/System-Design-Collaborative/file_system.png","872e6516b2c2dde08ffd9a6a7777e176"],["2021/04/20/System-Design-Collaborative/http_link.png","f404b313c11f1d5afcbee2d2957b2fbd"],["2021/04/20/System-Design-Collaborative/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/20/System-Design-Database-Cache/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/20/System-Design-System-Design-News-Feed-System/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/20/System-Design-Video-Streaming-System/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/20/TCP-UDP-and-HTTP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/21/Algorithm-Dynamic-Programming/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/21/Algorithm-Search/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/21/Data-Structure-Linkedlist/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/21/System-Design-Coupon-System/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/21/System-Design-Twitter-Search-Engine/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/21/System-Design-秒杀系统与订票系统设计/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/26/Tech-Stack-技术栈选型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/26/WebGL基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/26/threejs基础/camera_params.svg","4108279262c74d49f335639e1376e5d8"],["2021/04/26/threejs基础/hello_cube.svg","8e10298b051749bff32b02c980e02666"],["2021/04/26/threejs基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/26/threejs基础/new_hello_cube_light.svg","f1a2b1ab21b303adf2e5326b13dfe0fc"],["2021/04/26/threejs基础/threejs_structure.svg","7014d81377a9c64f4115ea0c7e41c56e"],["2021/04/26/开发一些h5/app_vs.jpg","af1a006e4e5173924637d4bfa598576c"],["2021/04/26/开发一些h5/hybrid.jpg","4943e5ec6fac033d8ad8c497659782a0"],["2021/04/26/开发一些h5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/26/开发微信小程序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/04/26/开发抖音小程序/index.html","d41d8cd98f00b204e9800998ecf8427e"],["2021/05/31/How-to-architect-a-large-scale-web-app/index.html","d41d8cd98f00b204e9800998ecf8427e"],["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/12/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2021/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2021/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2021/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2021/04/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2021/04/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2021/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2021/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2021/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2021/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2021/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Basic-JS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Blockchain-Dev/Fullstack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Blockchain-Dev/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Bot/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Database/NoSql/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Database/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Full-Stack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Interview/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["images/everest.jpg","7fe60cd58bfa949863e98baf99a71b25"],["images/forests.jpg","0d291d3b9719fdb0864abe16397fe876"],["images/island.jpg","1476ec9d952a32a61c129e9493acc1d1"],["images/me.png","f1d07fb0b9028fb6a4c315cbe9088fc5"],["images/roof.jpg","80531e81b9af279569f5228121d0ed50"],["images/water.jpg","b78e2383e7d189daa97bee89bd0a6b2a"],["images/wechat.jpg","7806dd4ce20644d426a7471dfcab7978"],["index.html","d41d8cd98f00b204e9800998ecf8427e"],["js/pikaday.js","bc0ec484e6c20739f7ee324871e9761c"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Alibaba/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Bundler/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Cache/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/DOM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Frontend/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Interview/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/JS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Microservice/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Node/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/React/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Redis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Webpack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







