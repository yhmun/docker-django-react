## Connectivity
```
$ ssh-keygen -R <domain_name>
$ ssh -i ~/GoogleDrive/.ssh/<aws_key.pem> <domain_name>
```

## Essetial setup
```
$ sudo vi /etc/ssh/sshd_config
ClientAliveInterval 60

$ sudo service sshd restart
```

## Software packages
```
$ sudo apt update
$ sudo apt upgrade
$ sudo apt-get -y update
$ sudo reboot
```

## Timezone
```
$ sudo timedatectl set-ntp yes
$ sudo timedatectl set-timezone America/Toronto
$ timedatectl
               Local time: Mon 2021-02-01 19:08:15 EST 
           Universal time: Tue 2021-02-02 00:08:15 UTC 
                 RTC time: Tue 2021-02-02 00:08:16     
                Time zone: America/Toronto (EST, -0500)
System clock synchronized: yes                         
              NTP service: active                      
          RTC in local TZ: no 
```

## Swapfile
```
$ sudo dd if=/dev/zero of=/var/swapfile bs=1M count=4096
$ sudo chmod 600 /var/swapfile
$ sudo mkswap /var/swapfile
$ sudo swapon /var/swapfile
$ echo "/var/swapfile   swap    swap    defaults        0   0" | sudo tee -a /etc/fstab > /dev/null
$ sudo swapon -a
$ sudo swapon --show
NAME          TYPE SIZE USED PRIO
/var/swapfile file   4G 256K   -2

$ sudo free -h
              total        used        free      shared  buff/cache   available
Mem:          475Mi       188Mi       5.0Mi       0.0Ki       280Mi       263Mi
Swap:         4.0Gi       0.0Ki       4.0Gi
```

## SSH key pair
```
$ mkdir -p ~/.ssh
$ ssh-keygen -t rsa -f ~/.ssh/id_rsa -q -N ""
$ cat ~/.ssh/id_rsa.pub
```

### Docker packege
```
$ sudo apt -y install apt-transport-https ca-certificates curl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
$ sudo apt -y update
$ apt-cache policy docker-ce
$ sudo apt -y install docker-ce
$ sudo apt -y install docker-compose
$ sudo usermod -aG docker ${USER}
$ exit
```

### Development packages
```
$ sudo apt-get -y install python3-pip python3-venv
$ sudo apt-get -y install nodejs npm
```

### Git setup
- Copy public key and paste it on the Github setting menu
```
$ cat ~/.ssh/id_rsa.pub
$ git config --global user.name "name"
$ git config --global user.email "example@gmail.com"
$ git clone git@github.com:mcodegeeks/django-portfolio-2.git
```


