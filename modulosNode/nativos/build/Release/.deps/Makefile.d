cmd_Makefile := cd ..; /usr/share/nodejs/node-gyp/gyp/gyp_main.py -fmake --ignore-environment "--toplevel-dir=." -I/home/didier/workspace/curso-de-node.js/modulosNode/nativos/build/config.gypi -I/usr/share/nodejs/node-gyp/addon.gypi -I/usr/include/nodejs/common.gypi "--depth=." "-Goutput_dir=." "--generator-output=build" "-Dlibrary=shared_library" "-Dvisibility=default" "-Dnode_root_dir=/usr/include/nodejs" "-Dnode_gyp_dir=/usr/share/nodejs/node-gyp" "-Dnode_lib_file=/usr/include/nodejs/<(target_arch)/node.lib" "-Dmodule_root_dir=/home/didier/workspace/curso-de-node.js/modulosNode/nativos" "-Dnode_engine=v8" binding.gyp
