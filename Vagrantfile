# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.define "phpqc.pp" do |v|
    v.vm.hostname = "phpqc.pp"

    v.vm.synced_folder "prez", "/home/vagrant/prez"

    v.vm.provider :lxc do |lxc, override|
      override.vm.box = 'fgrehm/trusty64-lxc'
    end

    v.vm.provision "ansible" do |ansible|
      ansible.playbook = "provisioning/playbook.yml"
      ansible.host_key_checking = false
      #ansible.verbose = 'vvvv'
      #ansible.tags = 'test'
    end
  end
end
