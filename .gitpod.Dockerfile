

FROM gitpod/workspace-full:latest

USER root
<<<<<<< HEAD
RUN apt-get update && apt-get install -y redis-server mc
=======
RUN apt-get update && apt-get install -y mc rsync 

#prepare for gitpod nodejs env
RUN rm -f /tmp/install_docker.sh && curl -s -o /tmp/install_docker.sh https://raw.githubusercontent.com/threefoldfoundation/data_threefold/development/gitpod_scripts/install_docker.sh && bash /tmp/install_docker.sh
>>>>>>> 3cd8946a00cf5d7f45f2f71ac63843f6ed0aef8b

# RUN apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/*

USER gitpod

<<<<<<< HEAD

# ENTRYPOINT [ "entrypoint.sh" ]
=======
# ENTRYPOINT [ "/usr/bin/bash" ]
>>>>>>> 3cd8946a00cf5d7f45f2f71ac63843f6ed0aef8b
