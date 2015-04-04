APP_FILE  = 'application.rb'
APP_CLASS = 'Beach'

require 'sinatra/assetpack/rake'
require 'rake/testtask'
require 'sinatra/export/rake'

Rake::TestTask.new do |t|
  t.libs << "test"
  t.test_files = FileList['test/test*.rb']
  t.verbose = true
end